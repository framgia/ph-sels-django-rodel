import React from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"
import { useSelector } from "react-redux"

import { TakeLesson, CategoryList } from "../../components/lesson"

function LessonMain() {
  const authUser = useSelector((state) => state.AuthUser.data)
  let { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <CategoryList user={authUser} />
      </Route>
      <Route path={`${path}/:id`} onLeave={<TakeLesson user={authUser} />}>
        <TakeLesson user={authUser} />
      </Route>
    </Switch>
  )
}

export default LessonMain
