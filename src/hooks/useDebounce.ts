import { useCallback, useEffect, useRef } from "react";

const useDebounce = (cb: (...args: any) => void, delay: number) => {
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        // clear timeout on re render
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = useCallback(
    (...args: any) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        cb(...args);
      }, delay);
    },
    [cb, delay]
  );

  return debouncedCallback;
};

export default useDebounce;
