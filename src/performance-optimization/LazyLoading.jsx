import { Suspense, lazy, useState } from "react";

import Button from "@/code-optimization/reusable-components/Button";

// React.lazy + dynamic import: the chunk is fetched only when the component renders.
const HeavyComponent = lazy(() => import("./HeavyComponent"));

const LazyLoading = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="space-y-3">
      <Button onClick={() => setIsVisible(true)} disabled={isVisible}>
        {isVisible ? "Heavy component loaded" : "Load heavy component"}
      </Button>

      {isVisible && (
        // Suspense shows the fallback while the chunk downloads.
        <Suspense fallback={<p className="text-sm text-muted-foreground">Loading heavy component…</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default LazyLoading;
