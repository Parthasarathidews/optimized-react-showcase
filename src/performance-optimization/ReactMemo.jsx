import { memo, useState } from "react";

import Button from "@/code-optimization/reusable-components/Button";

// Child WITHOUT memo: re-renders every time the parent re-renders,
// even though its props never change.
const PlainChild = ({ label }) => {
  console.log("[ReactMemo] PlainChild rendered");
  return <p className="rounded-md bg-secondary px-3 py-2 text-sm">Plain child: {label}</p>;
};

// Child WITH React.memo: React skips the re-render when props are shallow-equal.
const MemoChild = memo(({ label }) => {
  console.log("[ReactMemo] MemoChild rendered");
  return <p className="rounded-md bg-accent px-3 py-2 text-sm">Memoized child: {label}</p>;
});

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  console.log("[ReactMemo] Parent rendered, count =", count);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Button onClick={() => setCount((value) => value + 1)}>Re-render parent (count {count})</Button>
        <span className="text-xs text-muted-foreground">Watch the console</span>
      </div>
      <PlainChild label="props never change" />
      <MemoChild label="props never change" />
    </div>
  );
};

export default ReactMemo;
