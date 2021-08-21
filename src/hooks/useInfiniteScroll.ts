import { useEffect } from 'react';
import debounce from '../utils/debounce';

const useInfiniteScroll = (
  updateFunction = () => {},
  threshold = 400,
): void => {
  const handleScroll = debounce(() => {
    const { scrollTop, scrollHeight: height } = document.documentElement;
    const { pageYOffset, innerHeight } = window;
    const top = pageYOffset || scrollTop;

    if (top > height - innerHeight - threshold) updateFunction();
  }, 100);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });
};

export default useInfiniteScroll;
