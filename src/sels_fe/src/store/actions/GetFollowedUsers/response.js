import { GET_FOLLOWED_USER_SUCCESS } from "./action-types"

const getFollowedUserSuccess = (users) => {
  return {
    type: GET_FOLLOWED_USER_SUCCESS,
    payload: {
      users,
    },
  }
}

export { getFollowedUserSuccess }
