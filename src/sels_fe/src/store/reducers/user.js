import {
  POST_USER_SUCCESS,
  POST_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../actions/User/action-types"

export const initialState = {
  user_list: [],
  msg: "",
  error: null,
}

const postUserSuccess = (state = initialState, action) => {
  return {
    ...state,
    user_list: [...state.user_list, action.payload.user],
    msg: "New user has created.",
    error: null,
  }
}

const postUserFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getUserSuccess = (state = initialState, action) => {
  return {
    ...state,
    user_list: [
      ...state.user_list,
      state.user_list.map((user) =>
        user.id === action.payload.user.id ? action.payload.user : user
      ),
    ],
    error: null,
  }
}

const getUserFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getUserListSuccess = (state = initialState, action) => {
  return { ...state, user_list: action.payload.users, error: null }
}

const getUserListFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const updateUserSuccess = (state = initialState, action) => {
  return {
    ...state,
    user_list: [
      state.user_list.find((user) =>
        user.id === action.payload.user.id ? action.payload.user : user
      ),
    ],
    error: null,
  }
}

const updateUserFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const deleteUserSuccess = (state = initialState, action) => {
  return {
    ...state,
    user_list: state.user_list.filter(
      (user) => parseInt(user.id) !== parseInt(action.payload.user_id)
    ),
    msg: "user deleted",
    error: null,
  }
}

const deleteUserFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_SUCCESS:
      return postUserSuccess(state, action)
    case POST_USER_FAIL:
      return postUserFail(state, action)
    case GET_USER_SUCCESS:
      return getUserSuccess(state, action)
    case GET_USER_FAIL:
      return getUserFail(state, action)
    case GET_USER_LIST_SUCCESS:
      return getUserListSuccess(state, action)
    case GET_USER_LIST_FAIL:
      return getUserListFail(state, action)
    case UPDATE_USER_SUCCESS:
      return updateUserSuccess(state, action)
    case UPDATE_USER_FAIL:
      return updateUserFail(state, action)
    case DELETE_USER_SUCCESS:
      return deleteUserSuccess(state, action)
    case DELETE_USER_FAIL:
      return deleteUserFail(state, action)
    default:
      return state
  }
}

export { userReducer }
