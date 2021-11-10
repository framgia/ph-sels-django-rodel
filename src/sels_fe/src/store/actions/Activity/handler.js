import {
  postActivitySuccess,
  postBulkActivitySuccess,
  getActivitySuccess,
  getActivityListSuccess,
  updateActivitySuccess,
  deleteActivitySuccess,
} from "./response"

import api from "../../../adapters"

function handlePostActivity(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`activity/`, post_data)
    dispatch(postActivitySuccess(response.data))
  })()
}

function handlePostBulkActivity(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`activities/bulk/`, post_data)
    dispatch(postBulkActivitySuccess(response.data))
  })()
}

function handleGetActivity(activity_id, dispatch) {
  ;(async () => {
    const response = await api.get(`activity/${activity_id}/`)
    dispatch(getActivitySuccess(response.data))
  })()
}

function handleGetActivityList(dispatch) {
  ;(async () => {
    const response = await api.get(`activity/`)
    dispatch(getActivityListSuccess(response.data))
  })()
}

function handleUpdateActivity(activity_id, data, dispatch) {
  ;(async () => {
    const response = await api.put(`activity/${activity_id}/`, data)
    dispatch(updateActivitySuccess(response.data))
  })()
}

function handleDeleteActivity(activity_id, dispatch) {
  ;(async () => {
    await api.delete(`activity/${activity_id}/`)
    dispatch(deleteActivitySuccess(activity_id))
  })()
}

export {
  handlePostActivity,
  handlePostBulkActivity,
  handleGetActivity,
  handleGetActivityList,
  handleUpdateActivity,
  handleDeleteActivity,
}
