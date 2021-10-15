import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"
import { useDispatch, useSelector } from "react-redux"

import {
  getQuizList,
  getQuestionList,
  getChoiceList,
} from "../../store/actions"

import { Typography } from "@mui/material"

import {
  QuizCreate,
  QuizList,
  QuizDetail,
  QuizUpdate,
  QuizDelete,
  QuizWithQuestionsCreate,
} from "../../components/quiz"
import ChoiceSelect from "../../components/quiz/Choice/components/ChoiceSelect"

function QuizMain() {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  const { quiz_list } = useSelector((state) => state.Quiz)
  let { path } = useRouteMatch()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getQuizList())
    dispatch(getQuestionList())
    dispatch(getChoiceList())
  }, [dispatch])

  return isAuthenticated ? (
    <Switch>
      <Route path={`${path}`} exact>
        <QuizList quizzes={quiz_list} />
      </Route>
      <Route path={`${path}/try`} component={ChoiceSelect} />
      <Route path={`${path}/create`} component={QuizCreate} />
      <Route path={`${path}/new`} component={QuizWithQuestionsCreate} />
      <Route path={`${path}/:id`} component={QuizDetail} />
      <Route path={`${path}/:id/edit`} component={QuizUpdate} />
      <Route path={`${path}/:id/delete`} component={QuizDelete} />
    </Switch>
  ) : (
    <Typography variant="h6" color="primary">
      Signin to view this page
    </Typography>
  )
}

export default QuizMain
