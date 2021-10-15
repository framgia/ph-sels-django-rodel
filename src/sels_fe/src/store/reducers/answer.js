import {
  POST_ANSWER_SUCCESS,
  POST_ANSWER_FAIL,
  GET_ANSWER_SUCCESS,
  GET_ANSWER_FAIL,
  GET_ANSWER_LIST_SUCCESS,
  GET_ANSWER_LIST_FAIL,
  UPDATE_ANSWER_SUCCESS,
  UPDATE_ANSWER_FAIL,
  DELETE_ANSWER_SUCCESS,
  DELETE_ANSWER_FAIL,
} from "../actions/Answer/action-types"

export const initialState = {
  answer_list: [],
  msg: "",
  error: null,
}

const postAnswerSuccess = (state = initialState, action) => {
  return {
    ...state,
    answer_list: [...state.answer_list, action.payload.answer],
    msg: "New answer has created.",
    error: null,
  }
}

const postAnswerFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getAnswerSuccess = (state = initialState, action) => {
  return {
    ...state,
    answer_list: [
      ...state.answer_list,
      state.answer_list.map((answer) =>
        answer.id === action.payload.answer.id ? action.payload.answer : answer
      ),
    ],
    error: null,
  }
}

const getAnswerFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getAnswerListSuccess = (state = initialState, action) => {
  return { ...state, answer_list: action.payload.answerzes, error: null }
}

const getAnswerListFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const updateAnswerSuccess = (state = initialState, action) => {
  return {
    ...state,
    answer_list: [
      state.answer_list.find((answer) =>
        answer.id === action.payload.answer.id ? action.payload.answer : answer
      ),
    ],
    error: null,
  }
}

const updateAnswerFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const deleteAnswerSuccess = (state = initialState, action) => {
  return {
    ...state,
    answer_list: state.answer_list.filter(
      (answer) => parseInt(answer.id) !== parseInt(action.payload.answer_id)
    ),
    msg: "answer deleted",
    error: null,
  }
}

const deleteAnswerFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ANSWER_SUCCESS:
      return postAnswerSuccess(state, action)
    case POST_ANSWER_FAIL:
      return postAnswerFail(state, action)
    case GET_ANSWER_SUCCESS:
      return getAnswerSuccess(state, action)
    case GET_ANSWER_FAIL:
      return getAnswerFail(state, action)
    case GET_ANSWER_LIST_SUCCESS:
      return getAnswerListSuccess(state, action)
    case GET_ANSWER_LIST_FAIL:
      return getAnswerListFail(state, action)
    case UPDATE_ANSWER_SUCCESS:
      return updateAnswerSuccess(state, action)
    case UPDATE_ANSWER_FAIL:
      return updateAnswerFail(state, action)
    case DELETE_ANSWER_SUCCESS:
      return deleteAnswerSuccess(state, action)
    case DELETE_ANSWER_FAIL:
      return deleteAnswerFail(state, action)
    default:
      return state
  }
}

export { answerReducer }
