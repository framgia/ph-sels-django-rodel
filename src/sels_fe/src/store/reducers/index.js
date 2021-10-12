import { combineReducers } from 'redux'

import { signinReducer } from './user-signin'
import { signupReducer } from './user-signup'
import { gettUsersReducer } from './get-user-list'



const reducers = combineReducers({
  Signup: signupReducer,
  Signin: signinReducer,
  Users: gettUsersReducer,
})


export default reducers