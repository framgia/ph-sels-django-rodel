import {
  handlePostActivity,
  handlePostBulkActivity,
  handleGetActivity,
  handleGetActivityList,
  handleUpdateActivity,
  handleDeleteActivity,
} from "./handler"

const postActivity = (data) => {
  return (dispatch) => {
    handlePostActivity(data, dispatch)
  }
}

const postBulkActivity = (data) => {
  return (dispatch) => {
    handlePostBulkActivity(data, dispatch)
  }
}

const getActivity = (activity_id) => {
  return (dispatch) => {
    handleGetActivity(activity_id, dispatch)
  }
}

const getActivityList = () => {
  return (dispatch) => {
    handleGetActivityList(dispatch)
  }
}

const updateActivity = (activity_id, data) => {
  return (dispatch) => {
    handleUpdateActivity(activity_id, data, dispatch)
  }
}

const deleteActivity = (activity_id) => {
  return (dispatch) => {
    handleDeleteActivity(activity_id, dispatch)
  }
}

export {
  postActivity,
  postBulkActivity,
  getActivity,
  getActivityList,
  updateActivity,
  deleteActivity,
}
