import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"
import { useDispatch, useSelector } from "react-redux"

import {
  getUserList,
  getActivityList,
  getQuizList,
  getQuestionList,
  getChoiceList,
  getAnswerList,
  getLessonList,
  getAnsweredList,
  getFollowedUserList,
} from "../../store/actions"

import { Typography } from "@mui/material"

import { Activity } from "../../components/activity"
import { ActivityDetail } from "../../components/activity"
function ActivityMain() {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  const authUser = useSelector((state) => state.AuthUser.data)
  let { path } = useRouteMatch()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserList())
    dispatch(getActivityList())
    dispatch(getQuizList())
    dispatch(getQuestionList())
    dispatch(getChoiceList())
    dispatch(getAnswerList())
    dispatch(getLessonList())
    dispatch(getAnsweredList())
    dispatch(getFollowedUserList())
  }, [dispatch])

  return isAuthenticated ? (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <Activity authUser={authUser} />
        </Route>
        <Route path={`${path}/:id`}>
          <ActivityDetail authUser={authUser} />
        </Route>
      </Switch>
    </>
  ) : (
    <Typography variant="h6" color="primary">
      Signin to view this page.
    </Typography>
  )
}

export default ActivityMain
