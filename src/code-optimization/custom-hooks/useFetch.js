import { useEffect, useState } from "react";

/**
 * useFetch: reusable data-fetching hook.
 * Encapsulates the loading / error / data triple so components stay UI-only.
 * Aborts the request on unmount to avoid setting state on a dead component.
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        setData(await response.json());
      } catch (requestError) {
        if (requestError.name !== "AbortError") setError(requestError.message);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
