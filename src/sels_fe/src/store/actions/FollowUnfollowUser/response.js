import { 
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAIL,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAIL
} from "./action-types"


const followUserSuccess = user => {
  return {
    type: FOLLOW_USER_SUCCESS,
    payload: {
      user,
    }
  }
}

const followUserFail = error => {
  return {
    type: FOLLOW_USER_FAIL,
    payload: {
      error
    }
  }
}

const unfollowUserSuccess = user => {
  return {
    type: UNFOLLOW_USER_SUCCESS,
    payload: {
      user,
    }
  }
}

const unfollowUserFail = error => {
  return {
    type: UNFOLLOW_USER_FAIL,
    payload: {
      error
    }
  }
}


export {
  followUserSuccess,
  followUserFail,
  unfollowUserSuccess,
  unfollowUserFail
}
