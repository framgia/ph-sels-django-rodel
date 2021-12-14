import {
  postLessonSuccess,
  postLessonFail,
  postBulkLessonSuccess,
  getLessonSuccess,
  getLessonListSuccess,
  updateLessonSuccess,
  deleteLessonSuccess,
} from "./response"

import api from "../../../adapters"

function handlePostLesson(post_data, dispatch) {
  ;(async () => {
    try {
      const response = await api.post(`lesson/`, post_data)
      dispatch(postLessonSuccess(response.data))
    } catch (error) {
      dispatch(postLessonFail(error))
    }
  })()
}

function handlePostBulkLesson(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`lessons/bulk/`, post_data)
    dispatch(postBulkLessonSuccess(response.data))
  })()
}

function handleGetLesson(lesson_id, dispatch) {
  ;(async () => {
    const response = await api.get(`lesson/${lesson_id}/`)
    dispatch(getLessonSuccess(response.data))
  })()
}

function handleGetLessonList(dispatch) {
  ;(async () => {
    const response = await api.get(`lesson/`)
    dispatch(getLessonListSuccess(response.data))
  })()
}

function handleUpdateLesson(lesson_id, data, dispatch) {
  ;(async () => {
    const response = await api.put(`lesson/${lesson_id}/`, data)
    dispatch(updateLessonSuccess(response.data))
  })()
}

function handleDeleteLesson(lesson_id, dispatch) {
  ;(async () => {
    await api.delete(`lesson/${lesson_id}/`)
    dispatch(deleteLessonSuccess(lesson_id))
  })()
}

export {
  handlePostLesson,
  handlePostBulkLesson,
  handleGetLesson,
  handleGetLessonList,
  handleUpdateLesson,
  handleDeleteLesson,
}
