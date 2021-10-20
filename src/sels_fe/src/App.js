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
import { QuizMain, QuestionMain } from "./pages/quiz"

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
        <Route path="/quiz" component={QuizMain} />
        <Route path="/question" component={QuestionMain} />
      </Router>
    </div>
  )
}

export default App
