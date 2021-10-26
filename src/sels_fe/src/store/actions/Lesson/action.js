import {
  handlePostLesson,
  handlePostBulkLesson,
  handleGetLesson,
  handleGetLessonList,
  handleUpdateLesson,
  handleDeleteLesson,
} from "./handler"

const postLesson = (data) => {
  return (dispatch) => {
    handlePostLesson(data, dispatch)
  }
}

const postBulkLesson = (data) => {
  return (dispatch) => {
    handlePostBulkLesson(data, dispatch)
  }
}

const getLesson = (lesson_id) => {
  return (dispatch) => {
    handleGetLesson(lesson_id, dispatch)
  }
}

const getLessonList = () => {
  return (dispatch) => {
    handleGetLessonList(dispatch)
  }
}

const updateLesson = (lesson_id, data) => {
  return (dispatch) => {
    handleUpdateLesson(lesson_id, data, dispatch)
  }
}

const deleteLesson = (lesson_id) => {
  return (dispatch) => {
    handleDeleteLesson(lesson_id, dispatch)
  }
}

export {
  postLesson,
  postBulkLesson,
  getLesson,
  getLessonList,
  updateLesson,
  deleteLesson,
}
