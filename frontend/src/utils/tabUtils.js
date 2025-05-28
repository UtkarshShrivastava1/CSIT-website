import { useLocation } from 'react-router-dom';

export const useTabFromUrl = (defaultTab = '') => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get('tab') || defaultTab;
};

export const getTabFromUrl = (search) => {
  const searchParams = new URLSearchParams(search);
  return searchParams.get('tab') || '';
}; 