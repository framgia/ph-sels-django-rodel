import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router"

import { authSignin } from "../../../store/actions"

import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"

import UserSigninForm from "./components/UserSigninForm"

const UserSignin = () => {
  const signin = useSelector((state) => state.Signin)
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [onSubmit, setOnSubmit] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const history = useHistory()
  let { from } = location.state || { from: { pathname: "/" } }

  useEffect(() => {
    signin.error !== null ? setOnSubmit(false) : history.push(from)
  }, [signin])

  useEffect(() => {
    signin.isAuthenticated === true && history.push(from)
  }, [signin, history])

  const handleOnChange = (event) => {
    const { name, value } = event.target
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = () => {
    dispatch(authSignin(credentials))
    history.push(from)
    signin.error != null && setOnSubmit(true)
  }

  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      handleSubmit()
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
        Sign in
      </Typography>
      <UserSigninForm
        credentials={credentials}
        signin={signin}
        onChange={handleOnChange}
        onKeyPress={handleKeypress}
      />
      <br />
      <Button
        sx={{ mx: "auto", mb: 1, width: "50ch", borderRadius: "5px" }}
        type="secondary"
        color="primary"
        disabled={onSubmit}
        variant="contained"
        onClick={handleSubmit}
      >
        {onSubmit ? "SIGNING IN" : "SIGN IN"}
      </Button>
      <br />
      {signin.isAuthenticated ? (
        <Typography variant="h6" color="primary">
          You are currently signed in.
        </Typography>
      ) : null}
    </Box>
  )
}

export default UserSignin
