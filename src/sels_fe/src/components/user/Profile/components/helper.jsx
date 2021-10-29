import { Typography } from "@mui/material"

const getUserActivtyPrimaryText = (activity, username) => {
  const { activity_type, followed, started_lesson } = activity

  return activity_type === "Follow" ? (
    <Typography color="primary">
      {username} followed {followed.username}
    </Typography>
  ) : activity_type === "Unfollow" ? (
    <Typography color="primary">
      {username} unfollowed {followed.username}
    </Typography>
  ) : (
    <Typography color="primary">
      {username} started {started_lesson?.quiz?.name}
    </Typography>
  )
}

export { getUserActivtyPrimaryText }
