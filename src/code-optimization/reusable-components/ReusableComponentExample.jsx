import { useState } from "react";

import Button from "./Button";
import Card from "./Card";

const PLANS = [
  { id: "free", name: "Free", price: "$0", perks: "1 project, community support" },
  { id: "pro", name: "Pro", price: "$12", perks: "Unlimited projects, email support" },
  { id: "team", name: "Team", price: "$29", perks: "Shared workspace, SSO" },
];

/** Same Card + Button reused for every plan — data drives the UI, not copy-paste JSX. */
const ReusableComponentExample = () => {
  const [selectedPlanId, setSelectedPlanId] = useState("pro");

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger" size="sm">
          Danger (sm)
        </Button>
        <Button variant="primary" size="lg">
          Primary (lg)
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {PLANS.map((plan) => (
          <Card
            key={plan.id}
            title={`${plan.name} — ${plan.price}/mo`}
            className={selectedPlanId === plan.id ? "ring-2 ring-ring" : ""}
            footer={
              <Button
                variant={selectedPlanId === plan.id ? "primary" : "outline"}
                size="sm"
                onClick={() => setSelectedPlanId(plan.id)}
              >
                {selectedPlanId === plan.id ? "Selected" : "Select plan"}
              </Button>
            }
          >
            {plan.perks}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReusableComponentExample;
