import React from "react"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import { Box } from "@mui/system"
import {
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@material-ui/core"
import { AppBar, Toolbar, Typography, Stack, Divider } from "@mui/material"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

import RowingIcon from "@mui/icons-material/Rowing"
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns"
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import PersonIcon from "@mui/icons-material/Person"
import LogoutIcon from "@mui/icons-material/Logout"

const ESLNavBar = () => {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  const authUser = useSelector((state) => state.AuthUser.data)
  const history = useHistory()

  const handleActivity = () => {
    history.push(`/activities`)
  }

  const handleFollow = () => {
    history.push(`/follow`)
  }

  const handleSignout = () => {
    history.push(`/signout`)
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
            {authUser?.is_admin ? (
              <Button color="inherit" onClick={() => history.push(`/quiz`)}>
                Quiz|Admin
              </Button>
            ) : null}
          </Stack>
          {isAuthenticated ? (
            <Popup
              trigger={
                <IconButton size="medium" color="inherit" sx={{ mr: 2 }}>
                  <AccountCircleIcon fontSize="large" />
                </IconButton>
              }
              closeOnDocumentClick
              mouseLeaveDelay={300}
              mouseEnterDelay={0}
              arrow={false}
              position="bottom right"
            >
              {(close) => (
                <MenuList>
                  <Divider />
                  <MenuItem
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
                  </MenuItem>
                  <Divider />
                  <MenuItem
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
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>User Account</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem
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
                  </MenuItem>
                  <Divider />
                </MenuList>
              )}
            </Popup>
          ) : (
            <Button onClick={() => history.push(`/signin`)}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default ESLNavBar
