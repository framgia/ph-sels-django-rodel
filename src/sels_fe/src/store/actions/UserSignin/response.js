import { 
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_REFRESH,
  AUTH_LOGOUT
} from "./action-types"

export const authStart = () => {
  return {
    type: AUTH_START
  }  
}

export const authSuccess = () => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      user_email: localStorage.getItem("auth_user_email")
    }
  }
}

export const authFail = error => {
  return {
    type: AUTH_FAIL,
    error: error
  }
}

export const authRefresh = () => {
  return {
    type: AUTH_REFRESH,
    payload: {
      user_email: localStorage.getItem("auth_user_email")
    }
  }  
}

export const authLogout = () => {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("access_expiration")
  localStorage.removeItem("refresh_expiration")
  return {
    type: AUTH_LOGOUT,
    payload: {
      msg: "session has expired",
      error: "Auth session has expired"
    }
  }
}
