import {
  POST_LESSON_SUCCESS,
  POST_LESSON_FAIL,
  POST_BULK_LESSON_SUCCESS,
  POST_BULK_LESSON_FAIL,
  GET_LESSON_SUCCESS,
  GET_LESSON_FAIL,
  GET_LESSON_LIST_SUCCESS,
  GET_LESSON_LIST_FAIL,
  UPDATE_LESSON_SUCCESS,
  UPDATE_LESSON_FAIL,
  DELETE_LESSON_SUCCESS,
  DELETE_LESSON_FAIL,
} from "./action-types"

const postLessonSuccess = (lesson) => {
  return {
    type: POST_LESSON_SUCCESS,
    payload: {
      lesson,
    },
  }
}

const postLessonFail = (error) => {
  return {
    type: POST_LESSON_FAIL,
    payload: {
      error,
    },
  }
}

const postBulkLessonSuccess = (lessons) => {
  console.log(lessons)
  return {
    type: POST_BULK_LESSON_SUCCESS,
    payload: {
      lessons,
    },
  }
}

const postBulkLessonFail = (error) => {
  return {
    type: POST_BULK_LESSON_FAIL,
    payload: {
      error,
    },
  }
}

const getLessonSuccess = (lesson) => {
  return {
    type: GET_LESSON_SUCCESS,
    payload: {
      lesson,
    },
  }
}

const getLessonFail = (error) => {
  return {
    type: GET_LESSON_FAIL,
    payload: {
      error,
    },
  }
}

const getLessonListSuccess = (lessons) => {
  return {
    type: GET_LESSON_LIST_SUCCESS,
    payload: {
      lessons,
    },
  }
}

const getLessonListFail = (error) => {
  return {
    type: GET_LESSON_LIST_FAIL,
    payload: {
      error: error,
    },
  }
}

const updateLessonSuccess = (lesson) => {
  return {
    type: UPDATE_LESSON_SUCCESS,
    payload: {
      lesson,
    },
  }
}

const updateLessonFail = (error) => {
  return {
    type: UPDATE_LESSON_FAIL,
    payload: {
      error,
    },
  }
}

const deleteLessonSuccess = (lesson_id) => {
  return {
    type: DELETE_LESSON_SUCCESS,
    payload: {
      lesson_id,
    },
  }
}

const deleteLessonFail = (error) => {
  return {
    type: DELETE_LESSON_FAIL,
    payload: {
      error: error,
    },
  }
}

export {
  postLessonSuccess,
  postLessonFail,
  postBulkLessonSuccess,
  postBulkLessonFail,
  getLessonSuccess,
  getLessonFail,
  getLessonListSuccess,
  getLessonListFail,
  updateLessonSuccess,
  updateLessonFail,
  deleteLessonSuccess,
  deleteLessonFail,
}
