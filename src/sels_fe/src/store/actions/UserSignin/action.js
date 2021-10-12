

import { 
  handleSignin,
  setAuthRefreshTimeout,
  setAuthAccessTimeout,
  authTokenRefresh 
} from "./handler"

import { 
  authSignout
} from "./response"
 

const authSignin = (credentials) => {
  return dispatch => {
    handleSignin(credentials, dispatch)
  }
}

const authCheckState = () => {
  return dispatch => {
    const refreshToken = localStorage.getItem('refresh_token')
    const refreshExpiration = localStorage.getItem('refresh_expiration')
    
    if (refreshToken === undefined){
      dispatch(authSignout())
    }else {
      if (refreshExpiration <= new Date()){
        dispatch(authSignout())
      }else {
        dispatch(authTokenRefresh())
        dispatch(setAuthRefreshTimeout((new Date(refreshExpiration).getTime() - new Date().getTime()) / 1000))
        dispatch(setAuthAccessTimeout())
      }
    }
  }
}

export {
  authSignin,
  authSignout,
  authCheckState
}
