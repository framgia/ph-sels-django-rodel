import {
  GET_FOLLOWED_USER_SUCCESS,
  GET_FOLLOWED_USER_FAIL,
} from "../actions/GetFollowedUsers/action-types"

import {
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAIL,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAIL,
} from "../actions/FollowUnfollowUser/action-types"

export const initialState = {
  followed_user_list: [],
  msg: null,
  error: null,
}

const getFollowedUserSuccess = (state = initialState, action) => {
  return {
    ...state,
    followed_user_list: action.payload.users,
    msg: action.payload.msg,
    error: null,
  }
}

const getFollowedUserFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const followUserSuccess = (state = initialState, action) => {
  return {
    ...state,
    followed_user_list: [...state.followed_user_list, action.payload.user],
    msg: action.payload.msg,
    error: null,
  }
}

const followUserFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const unfollowUserSuccess = (state = initialState, action) => {
  return {
    ...state,
    followed_user_list: state.followed_user_list.filter(
      (followed) => followed.id !== parseInt(action.payload.follow_id)
    ),
    msg: action.payload.msg,
    error: null,
  }
}

const unfollowUserFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getFollowedUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLLOWED_USER_SUCCESS:
      return getFollowedUserSuccess(state, action)
    case GET_FOLLOWED_USER_FAIL:
      return getFollowedUserFail(state, action)
    case FOLLOW_USER_SUCCESS:
      return followUserSuccess(state, action)
    case FOLLOW_USER_FAIL:
      return followUserFail(state, action)
    case UNFOLLOW_USER_SUCCESS:
      return unfollowUserSuccess(state, action)
    case UNFOLLOW_USER_FAIL:
      return unfollowUserFail(state, action)
    default:
      return state
  }
}

export { getFollowedUsersReducer }
