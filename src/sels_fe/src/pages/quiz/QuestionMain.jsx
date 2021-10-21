import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"
import { useDispatch, useSelector } from "react-redux"

import { getQuestionList } from "../../store/actions"

import { Typography } from "@mui/material"
import {
  QuestionUpdate,
  QuestionDelete,
  QuestionDetail,
} from "../../components/quiz"

// import QuestionCreate from "./../../components/question/Question/QuestionCreate"

function QuestionMain() {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  let { path } = useRouteMatch()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getQuestionList())
  }, [dispatch])

  return isAuthenticated ? (
    <Switch>
      {/* <Route path={`${path}`} exact> */}
      {/* <QuestionList questions={question_list} /> */}
      {/* </Route> */}
      {/* <Route path={`${path}/details/:name`} component={QuestionCreate} /> */}
      {/* <Route path={`${path}/create`} component={QuestionCreate} /> */}
      <Route path={`${path}/:id`} component={QuestionDetail} />
      <Route path={`${path}/:id/edit`} component={QuestionUpdate} />
      <Route path={`${path}/:id/delete`} component={QuestionDelete} />
    </Switch>
  ) : (
    <Typography variant="h6" color="primary">
      Signin to view this page
    </Typography>
  )
}

export default QuestionMain
