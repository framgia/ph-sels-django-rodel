import {
  authStart,
  authSuccess,
  authFail,
  authRefresh,
  authSignout,
} from "./response"

import { baseURL } from "../../../adapters"

const tokenTimeout = {
  access: 60,
  refresh: 86400,
  accessTimer: setTimeout(() => {}),
  refreshTimer: setTimeout(() => {}),
}

const setAuthRefreshTimeout = (refreshExpiration = tokenTimeout.refresh) => {
  clearTimeout(tokenTimeout.refreshTimer)
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authSignout())
    }, refreshExpiration * 1000)
  }
}

const setAuthAccessTimeout = (accessExpiration = tokenTimeout.access) => {
  clearTimeout(tokenTimeout.accessTimer)

  return (dispatch) => {
    tokenTimeout.accessTimer = setTimeout(() => {
      dispatch(authTokenRefresh())
    }, accessExpiration * 1000)
  }
}

const authTokenRefresh = () => {
  return (dispatch) => {
    handleRefresh(dispatch)
  }
}

const handleSignin = async (credentials, dispatch) => {
  const url = `${baseURL}token/`
  const resquestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(credentials),
  }
  await fetch(url, resquestOption)
    .then((res) => {
      if (res.ok) {
        return res
      } else {
        throw res
      }
    })
    .then((data) => {
      console.log(data)
      data.json().then((data) => {
        const access_exp_date = new Date(
          new Date().getTime() + tokenTimeout.access * 1000
        )
        const refresh_exp_date = new Date(
          new Date().getTime() + tokenTimeout.refresh * 1000
        )
        localStorage.setItem("auth_user", credentials["username"])
        localStorage.setItem("access_token", data["access"])
        localStorage.setItem("refresh_token", data["refresh"])
        localStorage.setItem("access_expiration", access_exp_date)
        localStorage.setItem("refresh_expiration", refresh_exp_date)
        dispatch(authStart())
        dispatch(authSuccess())
        dispatch(setAuthAccessTimeout())
        dispatch(setAuthRefreshTimeout())
      })
    })
    .catch((err) => {
      err.json().then((error) => dispatch(authFail(error)))
    })
}

const _handleRefresh = (dispatch) => {
  const refreshToken = localStorage.getItem("refresh_token")
  const url = `${baseURL}token/refresh/`
  const resquestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ refresh: `${refreshToken}` }),
  }
  const response = fetch(url, resquestOption)
  return response
}

function handleRefresh(dispatch) {
  const response = _handleRefresh()
  response
    .then((res) => {
      if (res.ok) {
        return res
      } else {
        throw res
      }
    })
    .then((data) => {
      data.json().then((data) => {
        const access_exp_date = new Date(
          new Date().getTime() + tokenTimeout.access * 1000
        )
        localStorage.setItem("access_token", data["access"])
        localStorage.setItem("access_expiration", access_exp_date)
        dispatch(authRefresh())
        dispatch(authSuccess())
        dispatch(setAuthAccessTimeout())
      })
    })
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(authFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

export {
  handleSignin,
  handleRefresh,
  setAuthRefreshTimeout,
  setAuthAccessTimeout,
  authTokenRefresh,
}
