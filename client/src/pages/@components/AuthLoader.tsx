import { onAuthStateChanged } from 'firebase/auth';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useReducer } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import { createAuth } from 'src/utils/firebase';
import { returnNull } from 'src/utils/returnNull';
import { Loading } from '../../components/Loading/Loading';

export const AuthLoader = () => {
  const router = useRouter();
  const [user, setUser] = useAtom(userAtom);
  const [isInitedAuth, dispatchIsInitedAuth] = useReducer(() => true, false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(createAuth(), async (fbUser) => {
      if (fbUser) {
        await fbUser
          .getIdToken()
          .then((idToken) => apiClient.session.$post({ body: { idToken } }))
          .catch(returnNull);
        await apiClient.me.$get().catch(returnNull).then(setUser);
      } else {
        await apiClient.session.$delete();
        setUser(null);
      }

      dispatchIsInitedAuth();
    });

    return unsubscribe;
  }, [setUser]);

  useEffect(() => {
    const protectedRoutes = ['/mypage'];
    if (!isInitedAuth) return;

    if (protectedRoutes.includes(router.pathname) && !user) {
      router.push('/');
    }
  }, [router, isInitedAuth, user]);

  return <Loading visible={!isInitedAuth} />;
};
