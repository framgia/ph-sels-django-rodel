import { 
  GET_AUTH_USER_DETAILS_SUCCESS,
  GET_AUTH_USER_DETAILS_FAIL,
} from "./action-types"


const getAuthUserDetailsSuccess = authUser => {
  return {
    type: GET_AUTH_USER_DETAILS_SUCCESS,
    payload: {
      authUser
    }
  }
}

const getAuthUserDetailsFail = error => {
  return {
    type: GET_AUTH_USER_DETAILS_FAIL,
    payload: {
      error
    }
  }
}

export {
  getAuthUserDetailsSuccess,
  getAuthUserDetailsFail
}
