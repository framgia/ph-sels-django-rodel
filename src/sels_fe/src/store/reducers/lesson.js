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
} from "../actions/Lesson/action-types"

export const initialState = {
  lesson_list: [],
  msg: "",
  error: null,
}

const postLessonSuccess = (state = initialState, action) => {
  return {
    ...state,
    lesson_list: [...state.lesson_list, action.payload.lesson],
    msg: "New lesson has created.",
    error: null,
  }
}

const postLessonFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const postBulkLessonSuccess = (state = initialState, action) => {
  return {
    ...state,
    lesson_list: [...state.lesson_list, ...action.payload.lessons],
    msg: "Lessons has created.",
    error: null,
  }
}

const postBulkLessonFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getLessonSuccess = (state = initialState, action) => {
  return {
    ...state,
    lesson_list: [
      ...state.lesson_list,
      state.lesson_list.map((lesson) =>
        lesson.id === action.payload.lesson.id ? action.payload.lesson : lesson
      ),
    ],
    error: null,
  }
}

const getLessonFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getLessonListSuccess = (state = initialState, action) => {
  return { ...state, lesson_list: action.payload.lessons, error: null }
}

const getLessonListFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const updateLessonSuccess = (state = initialState, action) => {
  const index = state.lesson_list.findIndex(
    (lesson) => lesson.id === action.payload.lesson.id
  )
  const newArray = [...state.lesson_list]
  newArray[index] = action.payload.lesson

  return {
    ...state,
    lesson_list: newArray,
    error: null,
  }
}

const updateLessonFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const deleteLessonSuccess = (state = initialState, action) => {
  return {
    ...state,
    lesson_list: state.lesson_list.filter(
      (lesson) => parseInt(lesson.id) !== parseInt(action.payload.lesson_id)
    ),
    msg: "lesson deleted",
    error: null,
  }
}

const deleteLessonFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LESSON_SUCCESS:
      return postLessonSuccess(state, action)
    case POST_LESSON_FAIL:
      return postLessonFail(state, action)
    case POST_BULK_LESSON_SUCCESS:
      return postBulkLessonSuccess(state, action)
    case POST_BULK_LESSON_FAIL:
      return postBulkLessonFail(state, action)
    case GET_LESSON_SUCCESS:
      return getLessonSuccess(state, action)
    case GET_LESSON_FAIL:
      return getLessonFail(state, action)
    case GET_LESSON_LIST_SUCCESS:
      return getLessonListSuccess(state, action)
    case GET_LESSON_LIST_FAIL:
      return getLessonListFail(state, action)
    case UPDATE_LESSON_SUCCESS:
      return updateLessonSuccess(state, action)
    case UPDATE_LESSON_FAIL:
      return updateLessonFail(state, action)
    case DELETE_LESSON_SUCCESS:
      return deleteLessonSuccess(state, action)
    case DELETE_LESSON_FAIL:
      return deleteLessonFail(state, action)
    default:
      return state
  }
}

export { lessonReducer }
