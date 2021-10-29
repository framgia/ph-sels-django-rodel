import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"
import { useSelector, useDispatch } from "react-redux"

import { getUserList, getFollowedUserList } from "../../store/actions"

import { Typography } from "@mui/material"
import { ESLNavBar } from "../../components/header"
import { FollowUser, FollowedUser } from "../../components/follow"

function FollowMain() {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  const authUser = useSelector((state) => state.AuthUser.data)
  let { path } = useRouteMatch()
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserList())
    dispatch(getFollowedUserList())
  }, [dispatch])

  return isAuthenticated ? (
    <>
      <ESLNavBar />
      <Switch>
        <Route exact path={`${path}`}>
          <FollowUser authUser={authUser} />
        </Route>
        <Route exact path={`${path}/following`}>
          <FollowedUser authUser={authUser} />
        </Route>
      </Switch>
    </>
  ) : (
    <Typography variant="h6" color="primary">
      Signin to view this page.
    </Typography>
  )
}

export default FollowMain
