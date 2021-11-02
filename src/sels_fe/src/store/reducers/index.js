import { combineReducers } from "redux"

import { signinReducer } from "./user-signin"
import { signupReducer } from "./user-signup"
import { getAuthUserDetailsReducer } from "./get-auth-user-details"
import { getFollowedUsersReducer } from "./get-followed-users"
import { quizReducer } from "./quiz"
import { questionReducer } from "./question"
import { choiceReducer } from "./choice"
import { answerReducer } from "./answer"
import { userReducer } from "./user"
import { lessonReducer } from "./lesson"
import { answeredReducer } from "./answered"
import { activityReducer } from "./activity"

// const RESET_REDUX_STATE = "RESET_REDUX_STATE"
import { AUTH_LOGOUT } from "../actions/UserSignin/action-types"

const combinedReducer = combineReducers({
  Signup: signupReducer,
  Signin: signinReducer,
  AuthUser: getAuthUserDetailsReducer,
  FollowedUsers: getFollowedUsersReducer,
  Quiz: quizReducer,
  Question: questionReducer,
  Choice: choiceReducer,
  Answer: answerReducer,
  User: userReducer,
  Lesson: lessonReducer,
  Answered: answeredReducer,
  Activity: activityReducer,
})

const reducers = (state, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      delete state.Signup
      delete state.Signin
      delete state.AuthUser
      delete state.FollowedUsers
      delete state.Quiz
      delete state.Question
      delete state.Choice
      delete state.Answer
      delete state.User
      delete state.Lesson
      delete state.Answered
      delete state.Activity
      break
    default:
      return combinedReducer(state, action)
  }
}

export default reducers
