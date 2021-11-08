import React from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"
import { useSelector } from "react-redux"

import { FollowUser, FollowedUser } from "../../components/follow"

function FollowMain() {
  const authUser = useSelector((state) => state.AuthUser.data)
  let { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <FollowUser authUser={authUser} />
      </Route>
      <Route exact path={`${path}/following`}>
        <FollowedUser authUser={authUser} />
      </Route>
    </Switch>
  )
}

export default FollowMain
