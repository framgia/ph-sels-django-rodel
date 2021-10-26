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
} from "./action-types"

const postAnsweredSuccess = (answered) => {
  return {
    type: POST_ANSWERED_SUCCESS,
    payload: {
      answered,
    },
  }
}

const postAnsweredFail = (error) => {
  return {
    type: POST_ANSWERED_FAIL,
    payload: {
      error,
    },
  }
}

const postBulkAnsweredSuccess = (answereds) => {
  return {
    type: POST_BULK_ANSWERED_SUCCESS,
    payload: {
      answereds,
    },
  }
}

const postBulkAnsweredFail = (error) => {
  return {
    type: POST_BULK_ANSWERED_FAIL,
    payload: {
      error,
    },
  }
}

const getAnsweredSuccess = (answered) => {
  return {
    type: GET_ANSWERED_SUCCESS,
    payload: {
      answered,
    },
  }
}

const getAnsweredFail = (error) => {
  return {
    type: GET_ANSWERED_FAIL,
    payload: {
      error,
    },
  }
}

const getAnsweredListSuccess = (answereds) => {
  return {
    type: GET_ANSWERED_LIST_SUCCESS,
    payload: {
      answereds,
    },
  }
}

const getAnsweredListFail = (error) => {
  return {
    type: GET_ANSWERED_LIST_FAIL,
    payload: {
      error: error,
    },
  }
}

const updateAnsweredSuccess = (answered) => {
  return {
    type: UPDATE_ANSWERED_SUCCESS,
    payload: {
      answered,
    },
  }
}

const updateAnsweredFail = (error) => {
  return {
    type: UPDATE_ANSWERED_FAIL,
    payload: {
      error,
    },
  }
}

const deleteAnsweredSuccess = (answered_id) => {
  return {
    type: DELETE_ANSWERED_SUCCESS,
    payload: {
      answered_id,
    },
  }
}

const deleteAnsweredFail = (error) => {
  return {
    type: DELETE_ANSWERED_FAIL,
    payload: {
      error: error,
    },
  }
}

export {
  postAnsweredSuccess,
  postAnsweredFail,
  postBulkAnsweredSuccess,
  postBulkAnsweredFail,
  getAnsweredSuccess,
  getAnsweredFail,
  getAnsweredListSuccess,
  getAnsweredListFail,
  updateAnsweredSuccess,
  updateAnsweredFail,
  deleteAnsweredSuccess,
  deleteAnsweredFail,
}
