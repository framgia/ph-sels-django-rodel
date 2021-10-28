import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
  getFollowedUserList,
  getAuthUserDetails,
  unfollowUser,
  getUserList,
} from "../../../store/actions"

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core"
import { Divider } from "@mui/material"
import { Person } from "@material-ui/icons"

const FollowedUser = () => {
  const authUser = useSelector((state) => state.AuthUser.data)
  const { isAuthenticated } = useSelector((state) => state.Signin)
  const FollowedUsers = useSelector(
    (state) => state.FollowedUsers.followed_user_list
  )

  const [update, setUpdate] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAuthUserDetails())
    dispatch(getFollowedUserList())
    dispatch(getUserList())
  }, [dispatch])

  const handleUnfollowUser = (follow_id) => {
    dispatch(unfollowUser(follow_id))
    setUpdate(!update)
  }

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "30rem" }}>
      {isAuthenticated ? (
        <>
          <Typography variant="h5" color="primary">
            Followed Users
          </Typography>
          <List>
            {FollowedUsers?.map(
              (follow, index) =>
                authUser?.id !== follow.followee.id && (
                  <React.Fragment key={follow.id}>
                    <Divider />
                    <ListItem>
                      <ListItemIcon>
                        <Person fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={follow.followee.username} />
                      <Button
                        color="secondary"
                        variant="outlined"
                        onClick={() => handleUnfollowUser(follow.id)}
                      >
                        Unfollow
                      </Button>
                    </ListItem>
                  </React.Fragment>
                )
            )}
          </List>
        </>
      ) : (
        <Typography variant="h5" color="primary">
          You need to login to view followed users.
        </Typography>
      )}
    </Box>
  )
}

export default FollowedUser
