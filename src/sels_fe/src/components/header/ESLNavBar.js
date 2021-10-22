import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import { Box } from "@mui/system"
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core"
import { AppBar, Toolbar, Typography, Stack } from "@mui/material"

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

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
            <>
              <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={userMenuOpen}
                sx={{ mr: 2 }}
                onClick={handleUserMenu}
              >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={userMenuOpen}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleSignout}>Signout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button onClick={() => history.push(`/signin`)}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default ESLNavBar
