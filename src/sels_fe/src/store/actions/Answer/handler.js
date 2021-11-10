import {
  postAnswerSuccess,
  postBulkAnswerSuccess,
  getAnswerSuccess,
  getAnswerListSuccess,
  updateAnswerSuccess,
  deleteAnswerSuccess,
} from "./response"

import api from "../../../adapters"

function handlePostAnswer(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`answer/`, post_data)
    dispatch(postAnswerSuccess(response.data))
  })()
}

function handlePostBulkAnswer(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`answers/bulk/`, post_data)
    dispatch(postBulkAnswerSuccess(response.data))
  })()
}

function handleGetAnswer(answer_id, dispatch) {
  ;(async () => {
    const response = await api.get(`answer/${answer_id}/`)
    dispatch(getAnswerSuccess(response.data))
  })()
}

function handleGetAnswerList(dispatch) {
  ;(async () => {
    const response = await api.get(`answer/`)
    dispatch(getAnswerListSuccess(response.data))
  })()
}

function handleUpdateAnswer(answer_id, data, dispatch) {
  ;(async () => {
    const response = await api.put(`answer/${answer_id}/`, data)
    dispatch(updateAnswerSuccess(response.data))
  })()
}

function handleDeleteAnswer(answer_id, dispatch) {
  ;(async () => {
    await api.delete(`answer/${answer_id}/`)
    dispatch(deleteAnswerSuccess(answer_id))
  })()
}

export {
  handlePostAnswer,
  handlePostBulkAnswer,
  handleGetAnswer,
  handleGetAnswerList,
  handleUpdateAnswer,
  handleDeleteAnswer,
}
