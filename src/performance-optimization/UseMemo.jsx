import { useMemo, useState } from "react";

import Button from "@/code-optimization/reusable-components/Button";

// Deliberately slow function so the difference is visible.
const sumPrimesUpTo = (limit) => {
  console.log("[useMemo] expensive calculation running for limit =", limit);
  let total = 0;
  for (let candidate = 2; candidate <= limit; candidate += 1) {
    let isPrime = true;
    for (let divisor = 2; divisor * divisor <= candidate; divisor += 1) {
      if (candidate % divisor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) total += candidate;
  }
  return total;
};

const UseMemo = () => {
  const [limit, setLimit] = useState(20000);
  const [unrelatedCount, setUnrelatedCount] = useState(0);

  // The calculation only re-runs when `limit` changes.
  // Clicking the unrelated counter re-renders the component but reuses the cached value.
  const primeSum = useMemo(() => sumPrimesUpTo(limit), [limit]);

  return (
    <div className="space-y-4">
      <label className="block text-sm">
        Limit: <span className="font-mono">{limit}</span>
        <input
          type="range"
          min="10000"
          max="200000"
          step="10000"
          value={limit}
          onChange={(event) => setLimit(Number(event.target.value))}
          className="mt-2 w-full"
        />
      </label>

      <p className="text-sm">
        Sum of primes: <span className="font-mono">{primeSum}</span>
      </p>

      <Button onClick={() => setUnrelatedCount((value) => value + 1)}>
        Unrelated re-render ({unrelatedCount})
      </Button>
    </div>
  );
};

export default UseMemo;
