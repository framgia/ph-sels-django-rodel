import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"
import { useDispatch, useSelector } from "react-redux"

import {
  getQuizList,
  getQuestionList,
  getChoiceList,
  getAnswerList,
  getLessonList,
  getAnsweredList,
} from "../../store/actions"

import { Typography } from "@mui/material"

import { ESLNavBar } from "../../components/header"
import { TakeLesson, CategoryList } from "../../components/lesson"

function LessonMain() {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  const authUser = useSelector((state) => state.AuthUser.data)
  let { path } = useRouteMatch()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getQuizList())
    dispatch(getQuestionList())
    dispatch(getChoiceList())
    dispatch(getAnswerList())
    dispatch(getLessonList())
    dispatch(getAnsweredList())
  }, [dispatch])

  return isAuthenticated ? (
    <>
      <ESLNavBar />

      <Switch>
        <Route exact path={`${path}`}>
          <CategoryList user={authUser} />
        </Route>
        {/* <Route path={`${path}/create`} component={UserCreate} /> */}
        {/* <Route path={`${path}/new`} component={UserWithQuestionsCreate} />
      <Route path={`${path}/:id/edit`} component={UserUpdate} />
      <Route path={`${path}/:id/delete`} component={UserDelete} /> */}
        <Route path={`${path}/:id`}>
          <TakeLesson user={authUser} />
        </Route>
      </Switch>
    </>
  ) : (
    <Typography variant="h6" color="primary">
      Signin to view this page.
    </Typography>
  )
}

export default LessonMain
