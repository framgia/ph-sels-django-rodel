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

const reducers = combineReducers({
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
})

export default reducers
