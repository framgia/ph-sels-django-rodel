import {
  POST_ACTIVITY_SUCCESS,
  POST_ACTIVITY_FAIL,
  POST_BULK_ACTIVITY_SUCCESS,
  POST_BULK_ACTIVITY_FAIL,
  GET_ACTIVITY_SUCCESS,
  GET_ACTIVITY_FAIL,
  GET_ACTIVITY_LIST_SUCCESS,
  GET_ACTIVITY_LIST_FAIL,
  UPDATE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_FAIL,
  DELETE_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_FAIL,
} from "./action-types"

const postActivitySuccess = (activity) => {
  return {
    type: POST_ACTIVITY_SUCCESS,
    payload: {
      activity,
    },
  }
}

const postActivityFail = (error) => {
  return {
    type: POST_ACTIVITY_FAIL,
    payload: {
      error,
    },
  }
}

const postBulkActivitySuccess = (activities) => {
  console.log(activities)
  return {
    type: POST_BULK_ACTIVITY_SUCCESS,
    payload: {
      activities,
    },
  }
}

const postBulkActivityFail = (error) => {
  return {
    type: POST_BULK_ACTIVITY_FAIL,
    payload: {
      error,
    },
  }
}

const getActivitySuccess = (activity) => {
  return {
    type: GET_ACTIVITY_SUCCESS,
    payload: {
      activity,
    },
  }
}

const getActivityFail = (error) => {
  return {
    type: GET_ACTIVITY_FAIL,
    payload: {
      error,
    },
  }
}

const getActivityListSuccess = (activities) => {
  return {
    type: GET_ACTIVITY_LIST_SUCCESS,
    payload: {
      activities,
    },
  }
}

const getActivityListFail = (error) => {
  return {
    type: GET_ACTIVITY_LIST_FAIL,
    payload: {
      error: error,
    },
  }
}

const updateActivitySuccess = (activity) => {
  return {
    type: UPDATE_ACTIVITY_SUCCESS,
    payload: {
      activity,
    },
  }
}

const updateActivityFail = (error) => {
  return {
    type: UPDATE_ACTIVITY_FAIL,
    payload: {
      error,
    },
  }
}

const deleteActivitySuccess = (activity_id) => {
  return {
    type: DELETE_ACTIVITY_SUCCESS,
    payload: {
      activity_id,
    },
  }
}

const deleteActivityFail = (error) => {
  return {
    type: DELETE_ACTIVITY_FAIL,
    payload: {
      error: error,
    },
  }
}

export {
  postActivitySuccess,
  postActivityFail,
  postBulkActivitySuccess,
  postBulkActivityFail,
  getActivitySuccess,
  getActivityFail,
  getActivityListSuccess,
  getActivityListFail,
  updateActivitySuccess,
  updateActivityFail,
  deleteActivitySuccess,
  deleteActivityFail,
}
