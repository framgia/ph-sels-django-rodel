import {
  POST_QUESTION_SUCCESS,
  POST_QUESTION_FAIL,
  POST_BULK_QUESTION_SUCCESS,
  POST_BULK_QUESTION_FAIL,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAIL,
  GET_QUESTION_LIST_SUCCESS,
  GET_QUESTION_LIST_FAIL,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAIL,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAIL,
} from "../actions/Question/action-types"

export const initialState = {
  question_list: [],
  msg: "",
  error: null,
}

const postQuestionSuccess = (state = initialState, action) => {
  return {
    ...state,
    question_list: [...state.question_list, action.payload.question],
    msg: "New question has created.",
    error: null,
  }
}

const postQuestionFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const postBulkQuestionSuccess = (state = initialState, action) => {
  return {
    ...state,
    question_list: [...state.question_list, ...action.payload.questions],
    msg: "Questions has created.",
    error: null,
  }
}

const postBulkQuestionFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getQuestionSuccess = (state = initialState, action) => {
  return {
    ...state,
    question_list: [
      ...state.question_list,
      state.question_list.map((question) =>
        question.id === action.payload.question.id
          ? action.payload.question
          : question
      ),
    ],
    error: null,
  }
}

const getQuestionFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getQuestionListSuccess = (state = initialState, action) => {
  return { ...state, question_list: action.payload.questions, error: null }
}

const getQuestionListFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const updateQuestionSuccess = (state = initialState, action) => {
  const index = state.question_list.findIndex(
    (question) => question.id === action.payload.question.id
  )
  const newArray = [...state.question_list]
  newArray[index] = action.payload.question

  return {
    ...state,
    question_list: newArray,
    error: null,
  }
}

const updateQuestionFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const deleteQuestionSuccess = (state = initialState, action) => {
  return {
    ...state,
    question_list: state.question_list.filter(
      (question) =>
        parseInt(question.id) !== parseInt(action.payload.question_id)
    ),
    msg: "question deleted",
    error: null,
  }
}

const deleteQuestionFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_QUESTION_SUCCESS:
      return postQuestionSuccess(state, action)
    case POST_QUESTION_FAIL:
      return postQuestionFail(state, action)
    case POST_BULK_QUESTION_SUCCESS:
      return postBulkQuestionSuccess(state, action)
    case POST_BULK_QUESTION_FAIL:
      return postBulkQuestionFail(state, action)
    case GET_QUESTION_SUCCESS:
      return getQuestionSuccess(state, action)
    case GET_QUESTION_FAIL:
      return getQuestionFail(state, action)
    case GET_QUESTION_LIST_SUCCESS:
      return getQuestionListSuccess(state, action)
    case GET_QUESTION_LIST_FAIL:
      return getQuestionListFail(state, action)
    case UPDATE_QUESTION_SUCCESS:
      return updateQuestionSuccess(state, action)
    case UPDATE_QUESTION_FAIL:
      return updateQuestionFail(state, action)
    case DELETE_QUESTION_SUCCESS:
      return deleteQuestionSuccess(state, action)
    case DELETE_QUESTION_FAIL:
      return deleteQuestionFail(state, action)
    default:
      return state
  }
}

export { questionReducer }
