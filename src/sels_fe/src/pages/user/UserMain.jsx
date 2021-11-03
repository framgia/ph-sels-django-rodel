import React from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"

import { UserProfile } from "../../components/user"

function UserMain() {
  let { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        <UserProfile />
      </Route>
    </Switch>
  )
}

export default UserMain
