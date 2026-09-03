import { memo, useCallback, useState } from "react";

import Button from "@/code-optimization/reusable-components/Button";

// Memoized child: it still re-renders if a prop *identity* changes,
// which is exactly what happens with an inline function.
const ChildButton = memo(({ label, onClick }) => {
  console.log(`[useCallback] ChildButton "${label}" rendered`);
  return (
    <Button variant="outline" size="sm" onClick={onClick}>
      {label}
    </Button>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  // NOT memoized: a brand-new function on every render -> memo cannot help.
  const handleUnstable = () => setClicks((value) => value + 1);

  // Memoized: same function reference across renders -> memo child skips re-render.
  const handleStable = useCallback(() => setClicks((value) => value + 1), []);

  console.log("[useCallback] Parent rendered, count =", count);

  return (
    <div className="space-y-3">
      <Button onClick={() => setCount((value) => value + 1)}>Re-render parent (count {count})</Button>
      <div className="flex flex-wrap gap-2">
        <ChildButton label="without useCallback" onClick={handleUnstable} />
        <ChildButton label="with useCallback" onClick={handleStable} />
      </div>
      <p className="text-xs text-muted-foreground">Child clicks recorded: {clicks}</p>
    </div>
  );
};

export default UseCallback;
