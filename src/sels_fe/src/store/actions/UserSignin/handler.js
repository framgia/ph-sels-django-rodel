import { 
  authStart,
  authSuccess,
  authFail,
  authRefresh,
  authLogout,
} from './response'

import { baseURL } from '../../../adapters'

const tokenTimeout = {
  access: 60,
  refresh: 86400,
  accessTimer: setTimeout(( )=> {}),
  refreshTimer: setTimeout(() => {}),
}

const setAuthRefreshTimeout = (refreshExpiration=tokenTimeout.refresh) => {
  clearTimeout(tokenTimeout.refreshTimer)
  return dispatch => {
      setTimeout(() => {
        dispatch(authLogout()) 
      }, refreshExpiration  * 1000)
  }
}

const setAuthAccessTimeout = (accessExpiration=tokenTimeout.access) => {
  clearTimeout(tokenTimeout.accessTimer)
  
  return dispatch => {
    tokenTimeout.accessTimer = setTimeout(() => {
      dispatch(authTokenRefresh())
    }, accessExpiration * 1000)
  }
}

const authTokenRefresh = () => {
  return dispatch => {
    handleRefresh(dispatch)
  }
}

const handleLogin = (credentials, dispatch) => {
  const url = `${baseURL}token/`
  const resquestOption = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json" 
    }, 
    body:  JSON.stringify(credentials)
  }
  fetch(url, resquestOption)
  .then( res => {
    if (!res.ok) {
      throw new Error('get_token Error')
    }
    return res.json()
  })
  .then(data =>{
    console.log(data)
    const access_exp_date = new Date(new Date().getTime() + tokenTimeout.access * 1000)
    const refresh_exp_date = new Date(new Date().getTime() + tokenTimeout.refresh * 1000)
    localStorage.setItem("auth_user_email", credentials['email'])
    localStorage.setItem("access_token", data['access'])
    localStorage.setItem("refresh_token", data['refresh'])
    localStorage.setItem("access_expiration", access_exp_date)
    localStorage.setItem("refresh_expiration", refresh_exp_date) 
    dispatch(authStart())
    dispatch(authSuccess())
    dispatch(setAuthAccessTimeout())
    dispatch(setAuthRefreshTimeout())
  })
  .catch(error => { 
    dispatch(authFail(error))
  })
}

const handleRefresh = (dispatch) => {
  const refreshToken = localStorage.getItem("refresh_token")
  const url = `${baseURL}token/refresh/`
  const resquestOption = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json" 
    }, 
    body:  JSON.stringify({refresh: refreshToken})
  }
  fetch(url, resquestOption)
  .then( res => {
    if (!res.ok) 
      throw new Error('get_token Error')
    return res.json()
  })
  .then(data =>{
    const access_exp_date = new Date(new Date().getTime() + tokenTimeout.access * 1000)
    localStorage.setItem("access_token", data['access'])
    localStorage.setItem("access_expiration", access_exp_date)
    dispatch(authRefresh())
    dispatch(authSuccess())
    dispatch(setAuthAccessTimeout())
  })
  .catch(error => console.error(error))
}


export {
  handleLogin,
  handleRefresh,
  handleSignUp,
  setAuthRefreshTimeout,
  setAuthAccessTimeout,
  authTokenRefresh,
}