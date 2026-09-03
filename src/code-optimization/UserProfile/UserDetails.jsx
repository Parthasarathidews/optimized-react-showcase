/** Renders only the detail rows. */
const UserDetails = ({ user }) => (
  <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
    {[
      ["Email", user.email],
      ["Location", user.location],
      ["Joined", user.joinedAt],
      ["Projects", user.projectCount],
    ].map(([label, value]) => (
      <div key={label}>
        <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
        <dd className="text-foreground">{value}</dd>
      </div>
    ))}
  </dl>
);

export default UserDetails;
