import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { Box, Stack, Typography } from "@mui/material"

import ActivityCardList from "./components/ActivityCardList"
import ProfileCard from "./components/ProfileCard"

function Activity({ authUser }) {
  const activityList = useSelector((state) => state.Activity.activity_list)
  const followedUsers = useSelector(
    (state) => state.FollowedUsers.followed_user_list
  )

  const [authUserActivities, setAuthUserActivities] = useState([])
  const [userFollowedUserActivities, setUserFollowedUserActivities] = useState(
    []
  )
  const [followedList, setFollowedList] = useState([])

  useEffect(() => {
    const activities = activityList?.filter(
      (activity) => activity.user.id === authUser?.id
    )
    setAuthUserActivities(activities)
  }, [activityList, authUser])

  useEffect(() => {
    const followed = followedUsers?.filter(
      (follow) => follow.follower.id === authUser?.id
    )
    setFollowedList(followed)
  }, [followedUsers, authUser])

  useEffect(() => {
    const activities = activityList?.filter(
      (activity) =>
        followedList.some((follow) => follow.follower.id === authUser?.id) |
        (activity.user.id === authUser?.id)
    )
    setUserFollowedUserActivities(activities)
  }, [activityList, authUser, followedList])

  return (
    <Box sx={{ mt: "2rem", mx: "auto", width: "80%" }}>
      <Typography variant="h4" color="primary">
        Activities
      </Typography>
      <br />
      <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
        <ProfileCard
          authUserActivities={authUserActivities}
          authUser={authUser}
        />
        <ActivityCardList
          userFollowedUserActivities={userFollowedUserActivities}
          authUser={authUser}
        />
      </Stack>
    </Box>
  )
}

export default Activity
