import {
  POST_CHOICE_SUCCESS,
  POST_CHOICE_FAIL,
  GET_CHOICE_SUCCESS,
  GET_CHOICE_FAIL,
  GET_CHOICE_LIST_SUCCESS,
  GET_CHOICE_LIST_FAIL,
  UPDATE_CHOICE_SUCCESS,
  UPDATE_CHOICE_FAIL,
  DELETE_CHOICE_SUCCESS,
  DELETE_CHOICE_FAIL,
} from "./action-types"

const postChoiceSuccess = (choice) => {
  return {
    type: POST_CHOICE_SUCCESS,
    payload: {
      choice,
    },
  }
}

const postChoiceFail = (error) => {
  return {
    type: POST_CHOICE_FAIL,
    payload: {
      error,
    },
  }
}

const getChoiceSuccess = (answer) => {
  return {
    type: GET_CHOICE_SUCCESS,
    payload: {
      answer,
    },
  }
}

const getChoiceFail = (error) => {
  return {
    type: GET_CHOICE_FAIL,
    payload: {
      error,
    },
  }
}

const getChoiceListSuccess = (choices) => {
  return {
    type: GET_CHOICE_LIST_SUCCESS,
    payload: {
      choices,
    },
  }
}

const getChoiceListFail = (error) => {
  return {
    type: GET_CHOICE_LIST_FAIL,
    payload: {
      error: error,
    },
  }
}

const updateChoiceSuccess = (choice) => {
  return {
    type: UPDATE_CHOICE_SUCCESS,
    payload: {
      choice,
    },
  }
}

const updateChoiceFail = (error) => {
  return {
    type: UPDATE_CHOICE_FAIL,
    payload: {
      error,
    },
  }
}

const deleteChoiceSuccess = (choice_id) => {
  return {
    type: DELETE_CHOICE_SUCCESS,
    payload: {
      choice_id,
    },
  }
}

const deleteChoiceFail = (error) => {
  return {
    type: DELETE_CHOICE_FAIL,
    payload: {
      error: error,
    },
  }
}

export {
  postChoiceSuccess,
  postChoiceFail,
  getChoiceSuccess,
  getChoiceFail,
  getChoiceListSuccess,
  getChoiceListFail,
  updateChoiceSuccess,
  updateChoiceFail,
  deleteChoiceSuccess,
  deleteChoiceFail,
}
