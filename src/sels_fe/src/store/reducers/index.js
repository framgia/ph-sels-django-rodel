import { combineReducers } from 'redux'

import { signupReducer } from './user-signup'



const reducers = combineReducers({
  Signup: signupReducer
})


export default reducers