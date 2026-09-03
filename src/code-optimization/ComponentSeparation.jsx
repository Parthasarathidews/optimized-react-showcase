import UserProfile from "./UserProfile/UserProfile";

/** Entry point for the component-separation example. */
const ComponentSeparation = () => (
  <div className="space-y-3">
    <p className="text-sm text-muted-foreground">
      The profile below is composed of four small files: UserProfile, UserHeader, UserDetails, UserActions.
    </p>
    <UserProfile />
  </div>
);

export default ComponentSeparation;
