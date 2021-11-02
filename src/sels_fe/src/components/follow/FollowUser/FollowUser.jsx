import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getUserList, getAuthUserDetails } from "../../../store/actions"

import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
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
  const userList = useSelector((state) => state.User.user_list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserList())
    dispatch(getAuthUserDetails())
  }, [dispatch])

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "30rem" }}>
      {isAuthenticated ? (
        <>
          <Typography variant="h5" color="primary">
            Users
          </Typography>
          <List>
            {userList?.map(
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
                        users={userList}
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
