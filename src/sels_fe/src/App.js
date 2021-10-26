import "./App.css"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { authCheckState, getAuthUserDetails } from "./store/actions"

import {
  SigninSuccessRedirect,
  SignupSuccessRedirect,
  UserSignin,
  UserSignup,
} from "./components/user"
import { FollowedUser, FollowUser } from "./components/follow"
import { QuizMain } from "./pages/quiz"
import { HomeMain } from "./pages/home"
import { AdminMain } from "./pages/admin"
import { LessonMain } from "./pages/lesson"

function App() {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authCheckState())
    isAuthenticated && dispatch(getAuthUserDetails())
  }, [dispatch, isAuthenticated])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={UserSignup} />
          <Route path="/signup-success" component={SignupSuccessRedirect} />
          <Route path="/signin" component={UserSignin} />
          <Route path="/signin-success" component={SigninSuccessRedirect} />
          <Route path="/signin-success" component={SigninSuccessRedirect} />
          <Route path="/signout" component={SigninSuccessRedirect} />
          <Route path="/follow" component={FollowUser} />
          <Route path="/following" component={FollowedUser} />
        </Switch>
        <Route path="/" component={HomeMain} />
        <Route path="/quiz" component={QuizMain} />
        <Route path="/lesson" component={LessonMain} />
        <Route path="/admin" component={AdminMain} />
      </Router>
    </div>
  )
}

export default App
