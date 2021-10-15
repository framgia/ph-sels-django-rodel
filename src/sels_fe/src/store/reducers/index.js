import { combineReducers } from "redux"

import { signinReducer } from "./user-signin"
import { signupReducer } from "./user-signup"
import { gettUsersReducer } from "./get-user-list"
import { getAuthUserDetailsReducer } from "./get-auth-user-details"
import { getFollowedUsersReducer } from "./get-followed-users"
import { quizReducer } from "./quiz"
import { questionReducer } from "./question"
import { choiceReducer } from "./choice"

const reducers = combineReducers({
  Signup: signupReducer,
  Signin: signinReducer,
  Users: gettUsersReducer,
  AuthUser: getAuthUserDetailsReducer,
  FollowedUsers: getFollowedUsersReducer,
  Quiz: quizReducer,
  Question: questionReducer,
  Choice: choiceReducer,
})

export default reducers
