import {
  postQuestionSuccess,
  postBulkQuestionSuccess,
  getQuestionSuccess,
  getQuestionListSuccess,
  updateQuestionSuccess,
  deleteQuestionSuccess,
} from "./response"

import api from "../../../adapters"

function handlePostQuestion(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`question/`, post_data)
    dispatch(postQuestionSuccess(response.data))
  })()
}

function handlePostBulkQuestion(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`questions/bulk/`, post_data)
    dispatch(postBulkQuestionSuccess(response.data))
  })()
}

function handleGetQuestion(question_id, dispatch) {
  ;(async () => {
    const response = await api.get(`question/${question_id}/`)
    dispatch(getQuestionSuccess(response.data))
  })()
}

function handleGetQuestionList(dispatch) {
  ;(async () => {
    const response = await api.get(`question/`)
    dispatch(getQuestionListSuccess(response.data))
  })()
}

function handleUpdateQuestion(question_id, data, dispatch) {
  ;(async () => {
    const response = await api.put(`question/${question_id}/`, data)
    dispatch(updateQuestionSuccess(response.data))
  })()
}

function handleDeleteQuestion(question_id, dispatch) {
  ;(async () => {
    await api.delete(`question/${question_id}/`)
    dispatch(deleteQuestionSuccess(question_id))
  })()
}

export {
  handlePostQuestion,
  handlePostBulkQuestion,
  handleGetQuestion,
  handleGetQuestionList,
  handleUpdateQuestion,
  handleDeleteQuestion,
}
