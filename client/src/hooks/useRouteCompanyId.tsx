import { useRouter } from 'next/router';

export const useRouteCompanyId = () => {
  const router = useRouter();
  const { companyId } = router.query;

  const navigateTo = (path: string) => {
    if (typeof companyId === 'string') {
      router.push(`/${companyId}${path}`);
    }
  };

  return { router, companyId, navigateTo };
};
