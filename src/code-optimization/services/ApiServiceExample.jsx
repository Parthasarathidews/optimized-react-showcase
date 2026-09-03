import { useEffect, useState } from "react";

import { getPosts, getUsers } from "./api";
import Button from "../reusable-components/Button";
import Card from "../reusable-components/Card";

/**
 * The component only handles UI state. Fetch details, URLs and error
 * normalisation live in services/api.js.
 */
const ApiServiceExample = () => {
  const [resource, setResource] = useState("users");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;

    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = resource === "users" ? await getUsers(4) : await getPosts(4);
        if (isActive) setItems(result);
      } catch (requestError) {
        if (isActive) setError(requestError.message);
      } finally {
        if (isActive) setIsLoading(false);
      }
    };

    load();
    return () => {
      isActive = false;
    };
  }, [resource]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button variant={resource === "users" ? "primary" : "outline"} size="sm" onClick={() => setResource("users")}>
          getUsers()
        </Button>
        <Button variant={resource === "posts" ? "primary" : "outline"} size="sm" onClick={() => setResource("posts")}>
          getPosts()
        </Button>
      </div>

      {isLoading && <p className="text-sm text-muted-foreground">Loading {resource}…</p>}
      {error && <p className="text-sm text-destructive">Error: {error}</p>}

      {!isLoading && !error && (
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.id}>
              <Card title={item.name ?? item.title}>{item.email ?? item.body}</Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiServiceExample;
