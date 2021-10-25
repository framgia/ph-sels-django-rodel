import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { authSignup } from "../../../store/actions"

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

const UserSignup = () => {
  const signup = useSelector((state) => state.Signup)
  const [userData, setUserData] = useState(initialUserData)
  const [onSubmit, setOnSubmit] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    signup.error != null && setOnSubmit(false)
  }, [signup])

  useEffect(() => {
    signup.user?.id != null
      ? history.push("/signup-success")
      : console.log("failed to signup")
  }, [signup, history])

  const handleOnChange = (event) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = () => {
    dispatch(authSignup(userData))
    signup.error != null && setOnSubmit(true)
  }

  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      dispatch(authSignup(userData))
    }
  }

  return (
    <Box
      component="form"
      type="submit"
      sx={{ m: "1rem", mx: "auto", maxWidth: "50ch" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Typography variant="h4" color="primary">
        Sign Up
      </Typography>
      <UserSignupForm
        userData={userData}
        signup={signup}
        onChange={handleOnChange}
        onKeyPress={handleKeypress}
      />
      <br />
      <Button
        sx={{ mx: "auto", mb: 1, width: "50ch", borderRadius: 5 }}
        type="secondary"
        disabled={onSubmit}
        variant="contained"
        onClick={handleSubmit}
      >
        {onSubmit ? "SIGNING UP" : "SIGN UP"}
      </Button>
      <br />
    </Box>
  )
}

export default UserSignup
