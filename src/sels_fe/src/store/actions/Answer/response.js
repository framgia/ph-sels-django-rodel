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
} from "./action-types"

const postAnswerSuccess = (qnswer) => {
  return {
    type: POST_ANSWER_SUCCESS,
    payload: {
      qnswer,
    },
  }
}

const postAnswerFail = (error) => {
  return {
    type: POST_ANSWER_FAIL,
    payload: {
      error,
    },
  }
}

const getAnswerSuccess = (answer) => {
  return {
    type: GET_ANSWER_SUCCESS,
    payload: {
      answer,
    },
  }
}

const getAnswerFail = (error) => {
  return {
    type: GET_ANSWER_FAIL,
    payload: {
      error,
    },
  }
}

const getAnswerListSuccess = (qnswers) => {
  return {
    type: GET_ANSWER_LIST_SUCCESS,
    payload: {
      qnswers,
    },
  }
}

const getAnswerListFail = (error) => {
  return {
    type: GET_ANSWER_LIST_FAIL,
    payload: {
      error: error,
    },
  }
}

const updateAnswerSuccess = (qnswer) => {
  return {
    type: UPDATE_ANSWER_SUCCESS,
    payload: {
      qnswer,
    },
  }
}

const updateAnswerFail = (error) => {
  return {
    type: UPDATE_ANSWER_FAIL,
    payload: {
      error,
    },
  }
}

const deleteAnswerSuccess = (qnswer_id) => {
  return {
    type: DELETE_ANSWER_SUCCESS,
    payload: {
      qnswer_id,
    },
  }
}

const deleteAnswerFail = (error) => {
  return {
    type: DELETE_ANSWER_FAIL,
    payload: {
      error: error,
    },
  }
}

export {
  postAnswerSuccess,
  postAnswerFail,
  getAnswerSuccess,
  getAnswerFail,
  getAnswerListSuccess,
  getAnswerListFail,
  updateAnswerSuccess,
  updateAnswerFail,
  deleteAnswerSuccess,
  deleteAnswerFail,
}
