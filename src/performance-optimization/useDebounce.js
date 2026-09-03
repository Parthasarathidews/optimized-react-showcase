import { useEffect, useState } from "react";

/**
 * Custom debounce hook: returns `value` only after it has stopped
 * changing for `delay` ms. The timer is cleared on every keystroke.
 */
const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
