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
} from "./action-types"

const postQuestionSuccess = (question) => {
  return {
    type: POST_QUESTION_SUCCESS,
    payload: {
      question,
    },
  }
}

const postQuestionFail = (error) => {
  return {
    type: POST_QUESTION_FAIL,
    payload: {
      error,
    },
  }
}

const postBulkQuestionSuccess = (questions) => {
  console.log(questions)
  return {
    type: POST_BULK_QUESTION_SUCCESS,
    payload: {
      questions,
    },
  }
}

const postBulkQuestionFail = (error) => {
  return {
    type: POST_BULK_QUESTION_FAIL,
    payload: {
      error,
    },
  }
}

const getQuestionSuccess = (question) => {
  return {
    type: GET_QUESTION_SUCCESS,
    payload: {
      question,
    },
  }
}

const getQuestionFail = (error) => {
  return {
    type: GET_QUESTION_FAIL,
    payload: {
      error,
    },
  }
}

const getQuestionListSuccess = (questions) => {
  return {
    type: GET_QUESTION_LIST_SUCCESS,
    payload: {
      questions,
    },
  }
}

const getQuestionListFail = (error) => {
  return {
    type: GET_QUESTION_LIST_FAIL,
    payload: {
      error: error,
    },
  }
}

const updateQuestionSuccess = (question) => {
  return {
    type: UPDATE_QUESTION_SUCCESS,
    payload: {
      question,
    },
  }
}

const updateQuestionFail = (error) => {
  return {
    type: UPDATE_QUESTION_FAIL,
    payload: {
      error,
    },
  }
}

const deleteQuestionSuccess = (question_id) => {
  return {
    type: DELETE_QUESTION_SUCCESS,
    payload: {
      question_id,
    },
  }
}

const deleteQuestionFail = (error) => {
  return {
    type: DELETE_QUESTION_FAIL,
    payload: {
      error: error,
    },
  }
}

export {
  postQuestionSuccess,
  postQuestionFail,
  postBulkQuestionSuccess,
  postBulkQuestionFail,
  getQuestionSuccess,
  getQuestionFail,
  getQuestionListSuccess,
  getQuestionListFail,
  updateQuestionSuccess,
  updateQuestionFail,
  deleteQuestionSuccess,
  deleteQuestionFail,
}
