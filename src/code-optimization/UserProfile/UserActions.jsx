import Button from "../reusable-components/Button";

/** Action buttons only — parent owns the state, this component just calls back. */
const UserActions = ({ isFollowing, onToggleFollow, onMessage }) => (
  <div className="mt-4 flex gap-2">
    <Button variant={isFollowing ? "secondary" : "primary"} size="sm" onClick={onToggleFollow}>
      {isFollowing ? "Following" : "Follow"}
    </Button>
    <Button variant="outline" size="sm" onClick={onMessage}>
      Message
    </Button>
  </div>
);

export default UserActions;
