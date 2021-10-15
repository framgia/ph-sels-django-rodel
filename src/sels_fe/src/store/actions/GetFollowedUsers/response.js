import { 
  GET_FOLLOWED_USER_SUCCESS,
  GET_FOLLOWED_USER_FAIL
} from "./action-types"


const getFollowedUserSuccess = users => {
  return {
    type: GET_FOLLOWED_USER_SUCCESS,
    payload: {
      users,
    }
  }
}

const getFollowedUserFail = error => {
  return {
    type: GET_FOLLOWED_USER_FAIL,
    payload: {
      error
    }
  }
}


export {
  getFollowedUserSuccess,
  getFollowedUserFail
}
