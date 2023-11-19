import { onAuthStateChanged } from 'firebase/auth';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { isAdminAtom } from 'src/atoms/admin';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import { createAuth } from 'src/utils/firebase';
import { returnNull } from 'src/utils/returnNull';
import { Loading } from '../../components/Loading/Loading';

export const AuthLoader = () => {
  const router = useRouter();
  const [user, setUser] = useAtom(userAtom);
  const [isAdmin, setIsAdmin] = useAtom(isAdminAtom);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(createAuth(), async (fbUser) => {
      if (fbUser) {
        await fbUser
          .getIdToken()
          .then((idToken) => apiClient.session.$post({ body: { idToken } }))
          .catch(returnNull);
        const userData = await apiClient.me.$get().catch(returnNull);
        setUser(userData);
        if (userData !== null) {
          await apiClient.admin
            .$post({ body: userData?.id })
            .then(setIsAdmin)
            .catch(() => setIsAdmin(false));
        }
      } else {
        await apiClient.session.$delete();
        setUser(null);
        setIsAdmin(false);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, [setUser, setIsAdmin]);

  // eslint-disable-next-line complexity
  useEffect(() => {
    if (isLoading) return;
    const protectedRoutes = ['/mypage'];
    const adminProtectedRoutes = ['/admin'];

    if (protectedRoutes.includes(router.pathname) && !user) {
      router.push('/');
    } else if (adminProtectedRoutes.includes(router.pathname) && !isAdmin) {
      router.push('/');
    }
  }, [router, user, isAdmin, isLoading]);

  return <Loading visible={isLoading} />;
};
