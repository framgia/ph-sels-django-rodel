import { 
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAIL
} from "./action-types"

export const authSignupSuccess = (user) => {
  console.log(user)
  
  return {
    type: AUTH_SIGNUP_SUCCESS,
    payload: {
      user
    }
  }
}

export const authSignupFail = (error) => {
  console.log(error)

  return {
    type: AUTH_SIGNUP_FAIL,
    payload: {
      error
    }
  }
}