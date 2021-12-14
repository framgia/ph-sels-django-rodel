import {
  POST_ACTIVITY_SUCCESS,
  POST_BULK_ACTIVITY_SUCCESS,
  GET_ACTIVITY_SUCCESS,
  GET_ACTIVITY_LIST_SUCCESS,
  UPDATE_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_SUCCESS,
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

const postBulkActivitySuccess = (state = initialState, action) => {
  return {
    ...state,
    activity_list: [...state.activity_list, ...action.payload.activities],
    msg: "Activities has created.",
    error: null,
  }
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

const getActivityListSuccess = (state = initialState, action) => {
  return { ...state, activity_list: action.payload.activities, error: null }
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

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ACTIVITY_SUCCESS:
      return postActivitySuccess(state, action)
    case POST_BULK_ACTIVITY_SUCCESS:
      return postBulkActivitySuccess(state, action)
    case GET_ACTIVITY_SUCCESS:
      return getActivitySuccess(state, action)
    case GET_ACTIVITY_LIST_SUCCESS:
      return getActivityListSuccess(state, action)
    case UPDATE_ACTIVITY_SUCCESS:
      return updateActivitySuccess(state, action)
    case DELETE_ACTIVITY_SUCCESS:
      return deleteActivitySuccess(state, action)
    default:
      return state
  }
}

export { activityReducer }
