import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
  getUserList,
  getFollowedUserList,
  followUser,
  getAuthUserDetails,
} from "../../../store/actions"

import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core"
import { Divider } from "@mui/material"
import { Person } from "@material-ui/icons"

import FollowButton from "./components/FollowButton"

const FollowUser = () => {
  const authUser = useSelector((state) => state.AuthUser.data)
  const { isAuthenticated, username } = useSelector((state) => state.Signin)
  const users = useSelector((state) => state.User.user_list)

  const followedUsers = useSelector(
    (state) => state.FollowedUsers.followed_user_list
  )
  const [update, setUpdate] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserList())
    dispatch(getAuthUserDetails())
  }, [dispatch])

  useEffect(() => {
    dispatch(getFollowedUserList())
  }, [dispatch, update])

  const handleFollowUser = (followee) => {
    dispatch(followUser(authUser.id, followee))
    dispatch(getFollowedUserList())
    setUpdate(!update)
  }

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "30rem" }}>
      {isAuthenticated ? (
        <>
          <Typography variant="h5" color="primary">
            Users
          </Typography>
          <List>
            {users.length > 0
              ? users.map(
                  (user) =>
                    username !== user.username && (
                      <React.Fragment key={user.id}>
                        <Divider />
                        <ListItem>
                          <ListItemIcon>
                            <Person fontSize="large" />
                          </ListItemIcon>
                          <ListItemText primary={user.username} />
                          <FollowButton
                            user={user}
                            handlefollow={handleFollowUser}
                            isFollowing={followedUsers?.some(function (
                              followedUser
                            ) {
                              return followedUser.followee.id === user.id
                                ? true
                                : false
                            })}
                          />
                        </ListItem>
                      </React.Fragment>
                    )
                )
              : null}
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
