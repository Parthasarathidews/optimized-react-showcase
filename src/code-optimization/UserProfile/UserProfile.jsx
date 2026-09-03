import { useState } from "react";

import UserActions from "./UserActions";
import UserDetails from "./UserDetails";
import UserHeader from "./UserHeader";

const USER = {
  name: "Aditi Sharma",
  role: "Frontend Engineer",
  email: "aditi@example.com",
  location: "Bengaluru, India",
  joinedAt: "March 2023",
  projectCount: 12,
};

/**
 * Composition root: one small component per responsibility
 * (header / details / actions) instead of a single 300-line component.
 */
const UserProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <UserHeader user={USER} />
      <UserDetails user={USER} />
      <UserActions
        isFollowing={isFollowing}
        onToggleFollow={() => setIsFollowing((following) => !following)}
        onMessage={() => setMessage(`Message drafted to ${USER.name}`)}
      />
      {message && <p className="mt-3 text-xs text-muted-foreground">{message}</p>}
    </div>
  );
};

export default UserProfile;
