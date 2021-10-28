import React, { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
  getUserList,
  getFollowedUserList,
  followUser,
  unfollowUser,
  getAuthUserDetails,
} from "../../../store/actions"

import {
  Box,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Button,
  Divider,
} from "@mui/material"
import { Person } from "@material-ui/icons"
import FollowUnfollow from "./components/FollowUnfollow"

const FollowUser = () => {
  const authUser = useSelector((state) => state.AuthUser.data)
  const { isAuthenticated, username } = useSelector((state) => state.Signin)
  const followedUsers = useSelector(
    (state) => state.FollowedUsers.followed_user_list
  )
  const users = useSelector((state) => state.User.user_list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserList())
    dispatch(getAuthUserDetails())
    dispatch(getFollowedUserList())
  }, [dispatch])

  const isFollowing = (username) => {
    return followedUsers.some(
      (followed) => followed.followee.username === username
    )
  }

  // useEffect(() => {

  // }, [followedUsers])

  // useEffect(() => {
  //   followedUsers.map((followed) => console.log(followed.followee.username))
  //   console.log(followedUsers)
  // }, [followedUsers])

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "30rem" }}>
      {isAuthenticated ? (
        <>
          <Typography variant="h5" color="primary">
            Users
          </Typography>
          <List>
            {users?.map(
              (user) =>
                username !== user.username && (
                  <React.Fragment key={user.id}>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <Person fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={user.username} />
                      <FollowUnfollow
                        authUser={authUser}
                        user={user}
                        followed={followedUsers.find(
                          (followed) =>
                            followed.followee.username === user.username &&
                            followed
                        )}
                        users={users}
                      />
                    </ListItem>
                  </React.Fragment>
                )
            )}
          </List>
        </>
      ) : (
        <Typography variant="h5" color="primary">
          You need to login to view users to follow.
        </Typography>
      )}
    </Box>
  )
}

export default FollowUser
