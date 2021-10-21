import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import { Box, Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"

import UserSignupForm from "./components/UserSignupForm"

const initialUserData = {
  email: "",
  username: "",
  first_name: "",
  last_name: "",
  password: "",
  password2: "",
}

const NotSignin = () => {
  const history = useHistory()

  const handleRedirect = () => {
    history.push("/signup-success")
  }

  return (
    <>
      <Typography variant="h4" color="primary">
        Sign Up
      </Typography>
      <br />
      <Button
        sx={{ mx: "auto", mb: 1, width: "50ch", borderRadius: 5 }}
        type="secondary"
        color="primary"
        variant="contained"
        onClick={handleRedirect}
      >
        Signin
      </Button>
    </>
  )
}

export default NotSignin
