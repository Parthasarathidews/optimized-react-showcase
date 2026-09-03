import useFetch from "./useFetch";
import Card from "../reusable-components/Card";

const USERS_URL = "https://jsonplaceholder.typicode.com/users?_limit=5";

/** UI only: all fetching/loading/error logic lives inside the custom hook. */
const CustomHookExample = () => {
  const { data: users, isLoading, error } = useFetch(USERS_URL);

  if (isLoading) return <p className="text-sm text-muted-foreground">Loading users…</p>;
  if (error) return <p className="text-sm text-destructive">Error: {error}</p>;

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {(users ?? []).map((user) => (
        <li key={user.id}>
          <Card title={user.name}>
            {user.email}
            <br />
            {user.company?.name}
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default CustomHookExample;
