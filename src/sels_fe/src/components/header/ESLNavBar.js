import React, { useState, useEffect } from "react"
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

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"

const ESLNavBar = () => {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  const authUser = useSelector((state) => state.AuthUser.data)
  const [anchorEl, setAnchorEl] = useState(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const history = useHistory()

  const handleUserMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleSignout = () => {
    handleClose()
    history.push(`/signout`)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    setUserMenuOpen(Boolean(anchorEl))
  }, [anchorEl])

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
          <Stack
            direction="row"
            spacing={4}
            sx={{ mx: "auto", alignSelf: "center" }}
          >
            {authUser?.is_admin ? (
              <Button color="inherit" onClick={() => history.push(`/quiz`)}>
                Quiz
              </Button>
            ) : null}
          </Stack>
          {isAuthenticated ? (
            <Popup
              trigger={
                <IconButton
                  size="medium"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={handleUserMenu}
                >
                  <AccountCircleIcon fontSize="large" />
                </IconButton>
              }
              position="bottom right"
            >
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="Large" />
                  </ListItemIcon>
                  <ListItemText>User Account</ListItemText>
                </MenuItem>
                <Divider />

                <MenuItem button onClick={handleSignout}>
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="Large" />
                  </ListItemIcon>
                  <ListItemText>Signout</ListItemText>
                </MenuItem>
              </MenuList>
              <Divider />
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
