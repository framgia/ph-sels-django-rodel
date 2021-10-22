import {
  POST_USER_SUCCESS,
  POST_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "./action-types"

const postUserSuccess = (user) => {
  return {
    type: POST_USER_SUCCESS,
    payload: {
      user,
    },
  }
}

const postUserFail = (error) => {
  return {
    type: POST_USER_FAIL,
    payload: {
      error,
    },
  }
}

const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: {
      user,
    },
  }
}

const getUserFail = (error) => {
  return {
    type: GET_USER_FAIL,
    payload: {
      error,
    },
  }
}

const getUserListSuccess = (users) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: {
      users,
    },
  }
}

const getUserListFail = (error) => {
  return {
    type: GET_USER_LIST_FAIL,
    payload: {
      error: error,
    },
  }
}

const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: {
      user,
    },
  }
}

const updateUserFail = (error) => {
  return {
    type: UPDATE_USER_FAIL,
    payload: {
      error,
    },
  }
}

const deleteUserSuccess = (user_id) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: {
      user_id,
    },
  }
}

const deleteUserFail = (error) => {
  return {
    type: DELETE_USER_FAIL,
    payload: {
      error: error,
    },
  }
}

export {
  postUserSuccess,
  postUserFail,
  getUserSuccess,
  getUserFail,
  getUserListSuccess,
  getUserListFail,
  updateUserSuccess,
  updateUserFail,
  deleteUserSuccess,
  deleteUserFail,
}
