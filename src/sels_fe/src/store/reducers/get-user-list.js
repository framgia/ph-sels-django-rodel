import {
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../actions/GetUsers/action-types'


export const initialState = {
  user_list: [],
  msg: null,
  error: null
}



const getUserSuccess = (state=initialState, action) => {
  return {...state, 
    user_list: action.payload.users,
    msg: action.payload.msg,
    error: null
  }
}

const getUserFail = (state=initialState, action) => {
  return {...state, 
    msg: action.payload.msg,
    error: action.payload.error,
  }
}


const gettUsersReducer = (state=initialState, action ) => {
  switch (action.type) {
    case GET_USER_SUCCESS: return getUserSuccess(state, action)     
    case GET_USER_FAIL: return getUserFail(state, action) 
    default: return state
  }
}

export { gettUsersReducer }