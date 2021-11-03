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

import {
  QuizCreate,
  QuizList,
  QuizDetail,
  QuizUpdate,
  QuizDelete,
  QuizWithQuestionsCreate,
} from "../../components/quiz"

function QuizMain() {
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
  )
}

export default QuizMain
