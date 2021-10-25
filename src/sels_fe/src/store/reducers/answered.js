import {
  POST_ANSWERED_SUCCESS,
  POST_ANSWERED_FAIL,
  POST_BULK_ANSWERED_SUCCESS,
  POST_BULK_ANSWERED_FAIL,
  GET_ANSWERED_SUCCESS,
  GET_ANSWERED_FAIL,
  GET_ANSWERED_LIST_SUCCESS,
  GET_ANSWERED_LIST_FAIL,
  UPDATE_ANSWERED_SUCCESS,
  UPDATE_ANSWERED_FAIL,
  DELETE_ANSWERED_SUCCESS,
  DELETE_ANSWERED_FAIL,
} from "../actions/Answered/action-types"

export const initialState = {
  answered_list: [],
  msg: "",
  error: null,
}

const postAnsweredSuccess = (state = initialState, action) => {
  return {
    ...state,
    answered_list: [...state.answered_list, action.payload.answered],
    msg: "New answered has created.",
    error: null,
  }
}

const postAnsweredFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const postBulkAnsweredSuccess = (state = initialState, action) => {
  return {
    ...state,
    answered_list: [...state.answered_list, ...action.payload.answereds],
    msg: "Answereds has created.",
    error: null,
  }
}

const postBulkAnsweredFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getAnsweredSuccess = (state = initialState, action) => {
  return {
    ...state,
    answered_list: [
      ...state.answered_list,
      state.answered_list.map((answered) =>
        answered.id === action.payload.answered.id
          ? action.payload.answered
          : answered
      ),
    ],
    error: null,
  }
}

const getAnsweredFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getAnsweredListSuccess = (state = initialState, action) => {
  return { ...state, answered_list: action.payload.answereds, error: null }
}

const getAnsweredListFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const updateAnsweredSuccess = (state = initialState, action) => {
  const index = state.answered_list.findIndex(
    (answered) => answered.id === action.payload.answered.id
  )
  const newArray = [...state.answered_list]
  newArray[index] = action.payload.answered

  return {
    ...state,
    answered_list: newArray,
    error: null,
  }
}

const updateAnsweredFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const deleteAnsweredSuccess = (state = initialState, action) => {
  return {
    ...state,
    answered_list: state.answered_list.filter(
      (answered) =>
        parseInt(answered.id) !== parseInt(action.payload.answered_id)
    ),
    msg: "answered deleted",
    error: null,
  }
}

const deleteAnsweredFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const answeredReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ANSWERED_SUCCESS:
      return postAnsweredSuccess(state, action)
    case POST_ANSWERED_FAIL:
      return postAnsweredFail(state, action)
    case POST_BULK_ANSWERED_SUCCESS:
      return postBulkAnsweredSuccess(state, action)
    case POST_BULK_ANSWERED_FAIL:
      return postBulkAnsweredFail(state, action)
    case GET_ANSWERED_SUCCESS:
      return getAnsweredSuccess(state, action)
    case GET_ANSWERED_FAIL:
      return getAnsweredFail(state, action)
    case GET_ANSWERED_LIST_SUCCESS:
      return getAnsweredListSuccess(state, action)
    case GET_ANSWERED_LIST_FAIL:
      return getAnsweredListFail(state, action)
    case UPDATE_ANSWERED_SUCCESS:
      return updateAnsweredSuccess(state, action)
    case UPDATE_ANSWERED_FAIL:
      return updateAnsweredFail(state, action)
    case DELETE_ANSWERED_SUCCESS:
      return deleteAnsweredSuccess(state, action)
    case DELETE_ANSWERED_FAIL:
      return deleteAnsweredFail(state, action)
    default:
      return state
  }
}

export { answeredReducer }
