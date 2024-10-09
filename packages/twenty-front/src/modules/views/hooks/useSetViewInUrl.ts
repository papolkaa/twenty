import { useSearchParams } from 'react-router-dom';

export const useSetViewInUrl = () => {
  const [, setSearchParams] = useSearchParams();

  const setViewInUrl = (viewId: string) => {
    setSearchParams(() => {
      const searchParams = new URLSearchParams();
      searchParams.set('view', viewId);
      return searchParams;
    });
  };

  return { setViewInUrl };
};
