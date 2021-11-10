import {
  postQuizSuccess,
  getQuizSuccess,
  getQuizListSuccess,
  updateQuizSuccess,
  deleteQuizSuccess,
} from "./response"

import api from "../../../adapters"

function handlePostQuiz(post_data, dispatch) {
  console.log(post_data)
  ;(async () => {
    const response = await api.post(`quiz/`, post_data)
    dispatch(postQuizSuccess(response.data))
  })()
}

function handleGetQuiz(quiz_id, dispatch) {
  ;(async () => {
    const response = await api.get(`quiz/${quiz_id}/`)
    dispatch(getQuizSuccess(response.data))
  })()
}

function handleGetQuizList(query, dispatch) {
  ;(async () => {
    const response = await api.get(`quiz/`, {
      params: {
        search: query?.search,
      },
    })
    dispatch(getQuizListSuccess(response?.data))
  })()
}

function handleUpdateQuiz(quiz_id, data, dispatch) {
  ;(async () => {
    const response = await api.put(`quiz/${quiz_id}/`, data)
    dispatch(updateQuizSuccess(response.data))
  })()
}

function handleDeleteQuiz(quiz_id, dispatch) {
  ;(async () => {
    await api.delete(`quiz/${quiz_id}/`)
    dispatch(deleteQuizSuccess(quiz_id))
  })()
}

export {
  handlePostQuiz,
  handleGetQuiz,
  handleGetQuizList,
  handleUpdateQuiz,
  handleDeleteQuiz,
}
