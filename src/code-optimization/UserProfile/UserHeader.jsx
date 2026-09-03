/** Small, focused component: avatar + name + role only. */
const UserHeader = ({ user }) => (
  <div className="flex items-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
      {user.name.charAt(0)}
    </div>
    <div>
      <h3 className="text-base font-semibold text-foreground">{user.name}</h3>
      <p className="text-xs text-muted-foreground">{user.role}</p>
    </div>
  </div>
);

export default UserHeader;
