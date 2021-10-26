import React from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"

import { Typography } from "@mui/material"
import { ESLNavBar } from "../../components/header"

function HomeMain() {
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
