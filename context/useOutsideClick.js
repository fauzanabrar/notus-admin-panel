import { useCallback, useEffect } from 'react';

export const useOutsideClick = (ref, callback) => {
  const handleClick = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }, [callback, ref]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, handleClick]);
};
