import { useEffect, useState } from "react";

import useDebounce from "./useDebounce";

const ALL_FRAMEWORKS = ["React", "React Router", "Redux", "Recoil", "Svelte", "Solid", "Vue", "Angular", "Astro"];

// Simulated API call.
const searchFrameworks = (term) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(ALL_FRAMEWORKS.filter((name) => name.toLowerCase().includes(term.toLowerCase())));
    }, 300);
  });

const Debouncing = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [callCount, setCallCount] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  // Only the debounced term triggers the "API" call.
  const debouncedTerm = useDebounce(term, 500);

  useEffect(() => {
    if (!debouncedTerm) {
      setResults([]);
      return;
    }

    let isActive = true;
    setIsSearching(true);
    setCallCount((count) => count + 1);

    searchFrameworks(debouncedTerm)
      .then((found) => {
        if (isActive) setResults(found);
      })
      .finally(() => {
        if (isActive) setIsSearching(false);
      });

    return () => {
      isActive = false;
    };
  }, [debouncedTerm]);

  return (
    <div className="space-y-3">
      <input
        value={term}
        onChange={(event) => setTerm(event.target.value)}
        placeholder="Search frameworks…"
        className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
      <p className="text-xs text-muted-foreground">
        Typed value: <span className="font-mono">{term || "—"}</span> · debounced:{" "}
        <span className="font-mono">{debouncedTerm || "—"}</span> · API calls made:{" "}
        <span className="font-mono">{callCount}</span>
      </p>
      {isSearching ? (
        <p className="text-sm text-muted-foreground">Searching…</p>
      ) : (
        <ul className="space-y-1 text-sm">
          {results.map((name) => (
            <li key={name} className="rounded-md bg-secondary px-3 py-1.5">
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Debouncing;
