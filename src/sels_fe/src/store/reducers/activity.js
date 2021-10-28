import {
  POST_ACTIVITY_SUCCESS,
  POST_ACTIVITY_FAIL,
  POST_BULK_ACTIVITY_SUCCESS,
  POST_BULK_ACTIVITY_FAIL,
  GET_ACTIVITY_SUCCESS,
  GET_ACTIVITY_FAIL,
  GET_ACTIVITY_LIST_SUCCESS,
  GET_ACTIVITY_LIST_FAIL,
  UPDATE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_FAIL,
  DELETE_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_FAIL,
} from "../actions/Activity/action-types"

export const initialState = {
  activity_list: [],
  msg: "",
  error: null,
}

const postActivitySuccess = (state = initialState, action) => {
  return {
    ...state,
    activity_list: [...state.activity_list, action.payload.activity],
    msg: "New activity has created.",
    error: null,
  }
}

const postActivityFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const postBulkActivitySuccess = (state = initialState, action) => {
  return {
    ...state,
    activity_list: [...state.activity_list, ...action.payload.activities],
    msg: "Activities has created.",
    error: null,
  }
}

const postBulkActivityFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getActivitySuccess = (state = initialState, action) => {
  return {
    ...state,
    activity_list: [
      ...state.activity_list,
      state.activity_list.map((activity) =>
        activity.id === action.payload.activity.id
          ? action.payload.activity
          : activity
      ),
    ],
    error: null,
  }
}

const getActivityFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getActivityListSuccess = (state = initialState, action) => {
  return { ...state, activity_list: action.payload.activities, error: null }
}

const getActivityListFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const updateActivitySuccess = (state = initialState, action) => {
  const index = state.activity_list.findIndex(
    (activity) => activity.id === action.payload.activity.id
  )
  const newArray = [...state.activity_list]
  newArray[index] = action.payload.activity

  return {
    ...state,
    activity_list: newArray,
    error: null,
  }
}

const updateActivityFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const deleteActivitySuccess = (state = initialState, action) => {
  return {
    ...state,
    activity_list: state.activity_list.filter(
      (activity) =>
        parseInt(activity.id) !== parseInt(action.payload.activity_id)
    ),
    msg: "activity deleted",
    error: null,
  }
}

const deleteActivityFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ACTIVITY_SUCCESS:
      return postActivitySuccess(state, action)
    case POST_ACTIVITY_FAIL:
      return postActivityFail(state, action)
    case POST_BULK_ACTIVITY_SUCCESS:
      return postBulkActivitySuccess(state, action)
    case POST_BULK_ACTIVITY_FAIL:
      return postBulkActivityFail(state, action)
    case GET_ACTIVITY_SUCCESS:
      return getActivitySuccess(state, action)
    case GET_ACTIVITY_FAIL:
      return getActivityFail(state, action)
    case GET_ACTIVITY_LIST_SUCCESS:
      return getActivityListSuccess(state, action)
    case GET_ACTIVITY_LIST_FAIL:
      return getActivityListFail(state, action)
    case UPDATE_ACTIVITY_SUCCESS:
      return updateActivitySuccess(state, action)
    case UPDATE_ACTIVITY_FAIL:
      return updateActivityFail(state, action)
    case DELETE_ACTIVITY_SUCCESS:
      return deleteActivitySuccess(state, action)
    case DELETE_ACTIVITY_FAIL:
      return deleteActivityFail(state, action)
    default:
      return state
  }
}

export { activityReducer }
