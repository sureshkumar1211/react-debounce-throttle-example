import { useCallback, useRef } from "react";

const useThrottle = (fn: (...args: any) => void, limit: number) => {
  const lastRun = useRef<number>(Date.now());
  //   const [triggerdCount, setTriggeredCount] = useState(0);

  const throttle = useCallback(
    (...args: any) => {
      const now: number = Date.now();
      if (now - lastRun.current >= limit) {
        // setTriggeredCount((prevCount) => prevCount + 1);
        fn(...args);
        lastRun.current = Date.now();
      }
    },
    [fn, limit]
  );
  //   console.log("throttle", triggerdCount);
  return throttle;
};

export default useThrottle;
