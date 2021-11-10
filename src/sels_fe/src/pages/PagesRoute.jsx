import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import {
  getQuizList,
  getQuestionList,
  getChoiceList,
  getAnswerList,
  getUserList,
  getActivityList,
  getLessonList,
  getAnsweredList,
  getFollowedUserList,
} from "../store/actions"

import { UserSignin, UserSignup } from "../components/user"
import { QuizMain } from "./quiz"
import { HomeMain } from "./home"
import { AdminMain } from "./admin"
import { LessonMain } from "./lesson"
import { ActivityMain } from "./activity"
import { FollowMain } from "./follow"
import UserMain from "./user/UserMain"
import AdminRoute from "./AdminRoute"
import AuthenticatedRoute from "./AuthenticatedRoute"

function PagesRoute({ authUser, auth }) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth) {
      dispatch(getUserList())
      dispatch(getFollowedUserList())
      dispatch(getActivityList())
      dispatch(getQuizList())
      dispatch(getQuestionList())
      dispatch(getChoiceList())
      dispatch(getAnswerList())
      dispatch(getLessonList())
      dispatch(getAnsweredList())
    }
  }, [dispatch, auth])

  return (
    <>
      <Switch>
        <Route exact path='/' component={HomeMain} />
        <Route path='/signup' component={UserSignup} />
        <Route path='/signin' component={UserSignin} />
        <AuthenticatedRoute auth={auth}>
          <Route path='/follow' component={FollowMain} />
          <Route path='/lesson' component={LessonMain} />
          <Route path='/admin' component={AdminMain} />
          <Route path='/activities' component={ActivityMain} />
          <Route path='/user' component={UserMain} />
          <AdminRoute is_admin={authUser?.is_admin}>
            <Route path='/quiz' component={QuizMain} />
          </AdminRoute>
        </AuthenticatedRoute>
      </Switch>
    </>
  )
}

export default PagesRoute
