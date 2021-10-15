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
} from "./action-types"

const postQuizSuccess = (quiz) => {
  return {
    type: POST_QUIZ_SUCCESS,
    payload: {
      quiz,
    },
  }
}

const postQuizFail = (error) => {
  return {
    type: POST_QUIZ_FAIL,
    payload: {
      error,
    },
  }
}

const getQuizSuccess = (quiz) => {
  return {
    type: GET_QUIZ_SUCCESS,
    payload: {
      quiz,
    },
  }
}

const getQuizFail = (error) => {
  return {
    type: GET_QUIZ_FAIL,
    payload: {
      error,
    },
  }
}

const getQuizListSuccess = (quizzes) => {
  return {
    type: GET_QUIZ_LIST_SUCCESS,
    payload: {
      quizzes,
    },
  }
}

const getQuizListFail = (error) => {
  return {
    type: GET_QUIZ_LIST_FAIL,
    payload: {
      error: error,
    },
  }
}

const updateQuizSuccess = (quiz) => {
  return {
    type: UPDATE_QUIZ_SUCCESS,
    payload: {
      quiz,
    },
  }
}

const updateQuizFail = (error) => {
  return {
    type: UPDATE_QUIZ_FAIL,
    payload: {
      error,
    },
  }
}

const deleteQuizSuccess = (quiz_id) => {
  return {
    type: DELETE_QUIZ_SUCCESS,
    payload: {
      quiz_id,
    },
  }
}

const deleteQuizFail = (error) => {
  console.log(error)
  return {
    type: DELETE_QUIZ_FAIL,
    payload: {
      error: error,
    },
  }
}

export {
  postQuizSuccess,
  postQuizFail,
  getQuizSuccess,
  getQuizFail,
  getQuizListSuccess,
  getQuizListFail,
  updateQuizSuccess,
  updateQuizFail,
  deleteQuizSuccess,
  deleteQuizFail,
}
