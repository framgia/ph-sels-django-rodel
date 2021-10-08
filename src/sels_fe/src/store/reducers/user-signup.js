import {
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAIL
} from '../actions/UserSignup/action-types'


export const initialState = {
  signup: {
    msg: {
      email: null,
      username: null,
      password1: null,
      password2: null
    }
  },
}

const authSignUpSuccess = (state=initialState, action) => {
  return {...state, 
    signup: {
      ...state.signup,
      msg: 'Signup Success!',
    }
  }
}

const authSignUpFail = (state=initialState, action) => {
  return {...state, 
    signup: {
      ...state.signup,
      msg: 'Signup Failed.',
    }
  }
}

const signupReducer = (state=initialState, action ) => {
  switch (action.type) {
    case AUTH_SIGNUP_SUCCESS: return authSignUpSuccess(state, action) 
    case AUTH_SIGNUP_FAIL: return authSignUpFail(state, action) 
    default: return state
  }
}


export { signupReducer }