import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_REFRESH,
  AUTH_LOGOUT,
} from '../actions/UserSignin/action-types'


export const initialState = {
  isAuthenticated: false,
  username: null,
  msg: null,
  error: {
    id: null,
    username: null,
    password: null,
  }
}



const authStart = (state=initialState, action) => {
  return {...state, 
    isAuthenticated: false,
    msg: "User Authentication Started",
    error: null
  }
}


const authSuccess = (state=initialState, action) => {
  return {...state, 
    isAuthenticated: true,
    username: action.payload.user,
    msg: "User Authentication Success!",
    error: null
  }
}

const authFail = (state=initialState, action) => {
  return {...state, 
    isAuthenticated: false,
    username: null,
    msg: "User Authentication Failed",
    error: action.payload.error
  }
}

const authRefresh = (state=initialState, action) => {
  return {...state, 
    isAuthenticated: true, 
    username: action.payload.user, 
    msg: "Refreshed User Authentication",
    error: action.payload.error
  }
}

const authSignout = (state=initialState, action) => {
  return {...state, 
    isAuthenticated: false,
    msg: "User has been Signed out.",
    error: action.payload.error
  }
}

const signinReducer = (state=initialState, action ) => {
  switch (action.type) {
    case AUTH_START: return authStart(state, action)     
    case AUTH_SUCCESS: return authSuccess(state, action) 
    case AUTH_FAIL: return authFail(state, action) 
    case AUTH_REFRESH: return authRefresh(state, action) 
    case AUTH_LOGOUT: return authSignout(state, action) 
    default: return state
  }
}

export { signinReducer }