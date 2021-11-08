import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import {
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from "@mui/material"

import { profileMedia } from "./components/style"
import UserActivities from "./components/UserActivities"
import { FollowUnfollow } from "../../follow"

const Profile = ({ user, authUser, currentActivities }) => {
  const followedUsers = useSelector(
    (state) => state.FollowedUsers.followed_user_list
  )
  const [followers, setFollowerCount] = useState(0)
  const [followees, setFollowingCount] = useState(0)

  useEffect(() => {
    let followerList
    followerList = followedUsers.filter(
      (follow) => follow.followee.username === user.username
    )
    setFollowerCount(followerList)
  }, [followedUsers, user])

  useEffect(() => {
    let followingList
    followingList = followedUsers.filter(
      (follow) => follow.follower.username === user.username
    )
    setFollowingCount(followingList)
  }, [followedUsers, user])

  return (
    <Box sx={{ mx: "auto", width: "80%" }}>
      <Typography variant="h5" color="green">
        Profile
      </Typography>
      <br />
      <Stack direction="row" spacing={12} sx={{ justifyContent: "center" }}>
        <Card elevation={0} sx={{ alignSelf: "left" }}>
          <CardContent>
            <Stack
              direction="column"
              spacing={2}
              sx={{ justifyContent: "left" }}
            >
              <CardMedia
                component="img"
                image={
                  "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                alt="user photo"
                sx={profileMedia}
              />
              <Typography variant="h5">{user?.username}</Typography>
              <Divider />
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "center" }}
              >
                <Box variant="body1" width={100} height={60}>
                  <Typography variant="body1">{followers.length}</Typography>
                  <Typography variant="body1">Followers</Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box variant="body1" width={100} height={60}>
                  <Typography variant="body1">{followees.length}</Typography>
                  <Typography variant="body1">Following</Typography>
                </Box>
              </Stack>

              <FollowUnfollow
                authUser={authUser}
                user={user}
                followed={followedUsers.find(
                  (followed) =>
                    followed.followee.username === user.username && followed
                )}
              />
            </Stack>
          </CardContent>
        </Card>
        <Card
          elevation={2}
          sx={{
            p: "0.5rem",
            minWidth: "60%",
            bgcolor: "#f0f0f0ff",
            alignSelf: "center",
          }}
        >
          <CardContent
            sx={{
              bgcolor: "#ffffffe0",
              borderStyle: "inset",
            }}
          >
            <Typography variant="h6" color="green">
              Recent Activity
            </Typography>
            <UserActivities user={user} currentActivities={currentActivities} />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  )
}

export default Profile
