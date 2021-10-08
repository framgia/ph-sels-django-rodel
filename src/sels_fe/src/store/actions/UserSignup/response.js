import { 
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAIL
} from "./action-types"

export const authSignupSuccess = (userData) => {
  return {
    type: AUTH_SIGNUP_SUCCESS,
    payload: {
      user: userData
    }
  }
}

export const authSignupFail = (error) => {
  return {
    type: AUTH_SIGNUP_FAIL,
    error
  }
}