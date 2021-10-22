import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"
import { useSelector } from "react-redux"

import { Typography } from "@mui/material"
import { ESLNavBar } from "../../components/header"

function HomeMain() {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  let { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}`} exact>
        <>
          <ESLNavBar />
          <Typography>From Hompage with Love</Typography>
        </>
      </Route>
    </Switch>
  )
}

export default HomeMain
