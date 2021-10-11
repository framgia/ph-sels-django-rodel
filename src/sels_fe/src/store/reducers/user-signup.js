import {
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAIL
} from '../actions/UserSignup/action-types'


export const initialState = {
  msg: null,
  user: {},
  error: {
    email: null,
    username: null,
    password: null,
    password2: null
  }
}

const authSignupSuccess = (state=initialState, action) => {
  return {...state, 
    msg: 'Signup Success!',
    user: action.payload.user,
    error: null
  }
}

const authSignupFail = (state=initialState, action) => {
  return {...state, 
    msg: 'Signup Failed!',
    error: action.payload.error
  }
}

const signupReducer = (state=initialState, action ) => {
  switch (action.type) {
    case AUTH_SIGNUP_SUCCESS: return authSignupSuccess(state, action) 
    case AUTH_SIGNUP_FAIL: return authSignupFail(state, action) 
    default: return state
  }
}


export { signupReducer }