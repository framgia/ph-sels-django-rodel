import {
  POST_QUIZ_SUCCESS,
  POST_QUIZ_FAIL,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_FAIL,
  GET_QUIZ_LIST_SUCCESS,
  GET_QUIZ_LIST_FAIL,
  UPDATE_QUIZ_SUCCESS,
  UPDATE_QUIZ_FAIL,
  DELETE_QUIZ_SUCCESS,
  DELETE_QUIZ_FAIL,
} from "../actions/Quiz/action-types"

export const initialState = {
  quiz_list: [],
  msg: "",
  error: "",
}

const postQuizSuccess = (state = initialState, action) => {
  return {
    ...state,
    quiz_list: [...state.quiz_list, action.payload.quiz],
    msg: "New quiz has created.",
    error: null,
  }
}

const postQuizFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getQuizSuccess = (state = initialState, action) => {
  return {
    ...state,
    quiz_list: [
      ...state.quiz_list,
      state.quiz_list.map((quiz) =>
        quiz.id === action.payload.quiz.id ? action.payload.quiz : quiz
      ),
    ],
    error: null,
  }
}

const getQuizFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getQuizListSuccess = (state = initialState, action) => {
  return { ...state, quiz_list: action.payload.quizzes, error: null }
}

const getQuizListFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const updateQuizSuccess = (state = initialState, action) => {
  const index = state.quiz_list.findIndex(
    (quiz) => quiz.id === action.payload.quiz.id
  )
  const newArray = [...state.quiz_list]
  newArray[index] = action.payload.quiz

  return {
    ...state,
    quiz_list: newArray,
    error: null,
  }
}

const updateQuizFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const deleteQuizSuccess = (state = initialState, action) => {
  return {
    ...state,
    quiz_list: state.quiz_list.filter(
      (quiz) => parseInt(quiz.id) !== parseInt(action.payload.quiz_id)
    ),
    msg: "quiz deleted",
    error: null,
  }
}

const deleteQuizFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_QUIZ_SUCCESS:
      return postQuizSuccess(state, action)
    case POST_QUIZ_FAIL:
      return postQuizFail(state, action)
    case GET_QUIZ_SUCCESS:
      return getQuizSuccess(state, action)
    case GET_QUIZ_FAIL:
      return getQuizFail(state, action)
    case GET_QUIZ_LIST_SUCCESS:
      return getQuizListSuccess(state, action)
    case GET_QUIZ_LIST_FAIL:
      return getQuizListFail(state, action)
    case UPDATE_QUIZ_SUCCESS:
      return updateQuizSuccess(state, action)
    case UPDATE_QUIZ_FAIL:
      return updateQuizFail(state, action)
    case DELETE_QUIZ_SUCCESS:
      return deleteQuizSuccess(state, action)
    case DELETE_QUIZ_FAIL:
      return deleteQuizFail(state, action)
    default:
      return state
  }
}

export { quizReducer }
