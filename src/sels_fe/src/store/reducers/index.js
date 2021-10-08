import { combineReducers } from 'redux'

import { signupReducer } from './user-signup'




const reducers = combineReducers({
  signupReducer: signupReducer
})


export default reducers