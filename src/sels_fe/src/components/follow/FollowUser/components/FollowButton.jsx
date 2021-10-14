import { Button } from "@material-ui/core"

const FollowButton = ({ user, handlefollow, isFollowing }) => {
  return (
    <Button
      variant="contained"
      fontSize="large"
      disabled={isFollowing}
      color="primary"
      onClick={() => handlefollow(user.id)}
    >
      {isFollowing ? "Follow" : "Follow"}
    </Button>
  )
}

export default FollowButton
