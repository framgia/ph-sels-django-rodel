import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"
import { useDispatch, useSelector } from "react-redux"

import {
  getQuizList,
  getQuestionList,
  getChoiceList,
  getAnswerList,
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

import { ESLNavBar } from "../../components/header"

function QuizMain() {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  const authUser = useSelector((state) => state.AuthUser.data)
  const quizList = useSelector((state) => state.Quiz.quiz_list.results)
  let { path } = useRouteMatch()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getQuizList())
    dispatch(getQuestionList())
    dispatch(getChoiceList())
    dispatch(getAnswerList())
  }, [dispatch])

  return (
    <>
      <ESLNavBar />
      {isAuthenticated ? (
        authUser?.is_admin ? (
          <Switch>
            <Route path={`${path}`} exact>
              <QuizList quizzes={quizList} />
            </Route>
            <Route path={`${path}/create`} component={QuizCreate} />
            <Route path={`${path}/new`} component={QuizWithQuestionsCreate} />
            <Route path={`${path}/:id/edit`} component={QuizUpdate} />
            <Route path={`${path}/:id/delete`} component={QuizDelete} />
            <Route path={`${path}/:id`} component={QuizDetail} />
          </Switch>
        ) : (
          <>
            <br />
            <Typography variant="h5" color="secondary">
              Unauthorized:
            </Typography>
            <Typography variant="h6" color="error">
              You don't have admin previlege to view this
            </Typography>
          </>
        )
      ) : (
        <Typography variant="h6" color="primary">
          Signin to view this page
        </Typography>
      )}
    </>
  )
}

export default QuizMain
