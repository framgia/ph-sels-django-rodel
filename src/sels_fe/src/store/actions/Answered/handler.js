import {
  postAnsweredSuccess,
  postBulkAnsweredSuccess,
  getAnsweredSuccess,
  getAnsweredListSuccess,
  updateAnsweredSuccess,
  deleteAnsweredSuccess,
} from "./response"

import api from "../../../adapters"

function handlePostAnswered(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`answered/`, post_data)
    dispatch(postAnsweredSuccess(response.data))
  })()
}

function handlePostBulkAnswered(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`answered-questions/bulk`, post_data)
    dispatch(postBulkAnsweredSuccess(response.data))
  })()
}

function handleGetAnswered(answered_id, dispatch) {
  ;(async () => {
    const response = await api.get(`answered/${answered_id}/`)
    dispatch(getAnsweredSuccess(response.data))
  })()
}

function handleGetAnsweredList(dispatch) {
  ;(async () => {
    const response = await api.get(`answered/`)
    dispatch(getAnsweredListSuccess(response.data))
  })()
}

function handleUpdateAnswered(answered_id, data, dispatch) {
  ;(async () => {
    const response = await api.put(`answered/${answered_id}/`, data)
    dispatch(updateAnsweredSuccess(response.data))
  })()
}

function handleDeleteAnswered(answered_id, dispatch) {
  ;(async () => {
    await api.delete(`answered/${answered_id}/`)
    dispatch(deleteAnsweredSuccess(answered_id))
  })()
}

export {
  handlePostAnswered,
  handlePostBulkAnswered,
  handleGetAnswered,
  handleGetAnsweredList,
  handleUpdateAnswered,
  handleDeleteAnswered,
}
