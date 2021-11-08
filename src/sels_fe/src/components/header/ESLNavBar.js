import React from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { authSignout } from "../../store/actions"

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import RowingIcon from "@mui/icons-material/Rowing"
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns"
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary"
import PersonIcon from "@mui/icons-material/Person"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"

const ESLNavBar = () => {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  const authUser = useSelector((state) => state.AuthUser.data)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleActivity = () => {
    history.push(`/activities`)
  }

  const handleFollow = () => {
    history.push(`/follow`)
  }

  const handleSignout = () => {
    dispatch(authSignout())
    history.push("/signin")
  }

  return (
    <Box color="primary" sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#6a20e8" }}>
        <Toolbar color="primary">
          <IconButton size="medium" edge="start" color="inherit" sx={{ mr: 2 }}>
            <LocalLibraryIcon fontSize="larsge" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            E-Learning System
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mr: "5rem" }}>
            {isAuthenticated ? (
              <Button color="inherit" onClick={() => history.push(`/lesson`)}>
                Categories
              </Button>
            ) : null}
            {isAuthenticated & authUser?.is_admin ? (
              <Button color="inherit" onClick={() => history.push(`/quiz`)}>
                Quiz|Admin
              </Button>
            ) : null}
          </Stack>
          {isAuthenticated ? (
            <Popup
              trigger={
                <Button variant="outlined" color="inherit">
                  {authUser?.username}
                  <ArrowDropDownIcon fontSize="small" />
                </Button>
              }
              closeOnDocumentClick
              mouseLeaveDelay={300}
              // mouseEnterDelay={0}
              arrow={false}
              position="bottom right"
            >
              {(close) => (
                <List>
                  <Divider />
                  <ListItem
                    button
                    onClick={() => {
                      handleActivity()
                      close()
                    }}
                  >
                    <ListItemIcon>
                      <RowingIcon />
                    </ListItemIcon>
                    <ListItemText>Activities</ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem
                    button
                    onClick={() => {
                      handleFollow()
                      close()
                    }}
                  >
                    <ListItemIcon>
                      <FollowTheSignsIcon />
                    </ListItemIcon>
                    <ListItemText>Follow Users</ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>User Account</ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem
                    button
                    onClick={() => {
                      handleSignout()
                      close()
                    }}
                  >
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Signout</ListItemText>
                  </ListItem>
                  <Divider />
                </List>
              )}
            </Popup>
          ) : (
            <Button
              variant="contained"
              endIcon={<LoginIcon />}
              color="secondary"
              sx={{ mr: 2 }}
              onClick={() => history.push(`/signin`)}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default ESLNavBar
