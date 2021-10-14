import {
  GET_AUTH_USER_DETAILS_SUCCESS,
  GET_AUTH_USER_DETAILS_FAIL
} from '../actions/GetAuthUserDetails/action-types'


export const initialState = {
  data: null,
  msg: null,
  error: null
}



const getAuthUserDetailsSuccess = (state=initialState, action) => {
  return {...state, 
    data: action.payload.authUser,
    msg: action.payload.msg,
    error: null
  }
}

const getAuthUserDetailsFail = (state=initialState, action) => {
  return {...state, 
    msg: action.payload.msg,
    error: action.payload.error,
  }
}


const getAuthUserDetailsReducer = (state=initialState, action ) => {
  switch (action.type) {
    case GET_AUTH_USER_DETAILS_SUCCESS: return getAuthUserDetailsSuccess(state, action)     
    case GET_AUTH_USER_DETAILS_FAIL: return getAuthUserDetailsFail(state, action) 
    default: return state
  }
}

export { getAuthUserDetailsReducer }