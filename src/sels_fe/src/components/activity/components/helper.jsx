import { Stack, Typography } from "@mui/material"

const getActivtyPrimaryText = (activity, authUsername) => {
  const { user, activity_type, followed, started_lesson } = activity

  return activity_type == "Follow" ? (
    <Stack direction="row" spacing="0.25rem">
      <Typography color="green">
        {user.username === authUsername ? "You" : user.username}
      </Typography>
      <Typography>started following</Typography>
      <Typography color="blue">
        {followed.username === authUsername ? "You" : followed.username}
      </Typography>
    </Stack>
  ) : activity_type == "Unfollow" ? (
    <Stack direction="row" spacing="0.25rem">
      <Typography color="green">
        {user.username === authUsername ? "You" : user.username}
      </Typography>
      <Typography>unfollowed</Typography>
      <Typography color="blue">
        {followed.username === authUsername ? "You" : followed.username}
      </Typography>
    </Stack>
  ) : (
    <Stack direction="row" spacing="0.25rem">
      <Typography color="green">
        {user.username === authUsername ? "You" : user.username}
      </Typography>
      <Typography>started a lesson,</Typography>
      <Typography color="blue">{started_lesson?.quiz?.name}</Typography>
    </Stack>
  )
}
const getAuthUserActivtyPrimaryText = (activity) => {
  const { user, activity_type, followed, started_lesson } = activity

  return activity_type == "Follow" ? (
    <Typography color="blue">Followed {followed.username}</Typography>
  ) : activity_type == "Unfollow" ? (
    <Typography color="blue">Unfollowed {followed.username}</Typography>
  ) : (
    <Typography color="blue">Started {started_lesson?.quiz?.name}</Typography>
  )
}

export { getActivtyPrimaryText, getAuthUserActivtyPrimaryText }
