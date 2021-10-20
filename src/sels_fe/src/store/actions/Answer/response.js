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

const postAnswerSuccess = (answer) => {
  return {
    type: POST_ANSWER_SUCCESS,
    payload: {
      answer,
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

const getAnswerListSuccess = (answers) => {
  return {
    type: GET_ANSWER_LIST_SUCCESS,
    payload: {
      answers,
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

const updateAnswerSuccess = (answer) => {
  return {
    type: UPDATE_ANSWER_SUCCESS,
    payload: {
      answer,
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

const deleteAnswerSuccess = (answer_id) => {
  return {
    type: DELETE_ANSWER_SUCCESS,
    payload: {
      answer_id,
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
