import { 
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_REFRESH,
  AUTH_LOGOUT
} from "./action-types"

const authStart = () => {
  return {
    type: AUTH_START
  }  
}

const authSuccess = user => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      user: localStorage.getItem("auth_user"),
    }
  }
}

const authFail = error => {
  return {
    type: AUTH_FAIL,
    payload: {
      msg: "User Authentication Failed",
      error: error
    }
  }
}

const authRefresh = user => {
  return {
    type: AUTH_REFRESH,
    payload: {
      user: localStorage.getItem("auth_user"),
      msg: "User Session has been Refreshed.",
    }
  }  
}

const authSignout = () => {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("access_expiration")
  localStorage.removeItem("refresh_expiration")
  return {
    type: AUTH_LOGOUT,
    payload: {
      msg: "User Session has Expired",
      error: "Auth Session has Expired"
    }
  }
}

export {
  authStart,
  authSuccess,
  authFail,
  authRefresh,
  authSignout
}
