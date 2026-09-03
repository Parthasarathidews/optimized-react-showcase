import { useState } from "react";

import Button from "./reusable-components/Button";

const CATALOG = [
  { id: "kb", name: "Mechanical keyboard", price: 89 },
  { id: "ms", name: "Wireless mouse", price: 35 },
  { id: "hp", name: "Headphones", price: 120 },
];

/**
 * Clean state management rules shown here:
 * 1. State lives where it is needed (this component only) — no global store.
 * 2. No duplicated state: we store ONLY the quantity map.
 * 3. Totals are DERIVED on render instead of being stored in extra state,
 *    so they can never go out of sync with the cart.
 */
const CleanStateManagement = () => {
  const [quantities, setQuantities] = useState({});

  const changeQuantity = (id, delta) =>
    setQuantities((current) => {
      const next = Math.max(0, (current[id] ?? 0) + delta);
      const updated = { ...current, [id]: next };
      if (next === 0) delete updated[id];
      return updated;
    });

  // Derived values — not state.
  const itemCount = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0);
  const totalPrice = CATALOG.reduce((sum, product) => sum + product.price * (quantities[product.id] ?? 0), 0);

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        {CATALOG.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm"
          >
            <span>
              {product.name} — ${product.price}
            </span>
            <span className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => changeQuantity(product.id, -1)}>
                −
              </Button>
              <span className="w-6 text-center font-mono">{quantities[product.id] ?? 0}</span>
              <Button variant="outline" size="sm" onClick={() => changeQuantity(product.id, 1)}>
                +
              </Button>
            </span>
          </li>
        ))}
      </ul>

      <p className="text-sm font-medium">
        Derived: {itemCount} item(s), total ${totalPrice}
      </p>
    </div>
  );
};

export default CleanStateManagement;
