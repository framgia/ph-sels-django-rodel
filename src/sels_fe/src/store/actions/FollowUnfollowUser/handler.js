import { followUserSuccess, unfollowUserSuccess } from "./response"

import api from "../../../adapters"

function handleFollowUser(follower, followee, dispatch) {
  ;(async () => {
    const response = await api.post(`follow-user/`, {
      follower,
      followee,
    })
    dispatch(followUserSuccess(response.data))
  })()
}

function handleUnfollowUser(follow_id, dispatch) {
  ;(async () => {
    await api.delete(`follows/${follow_id}/`)
    dispatch(unfollowUserSuccess(follow_id))
  })()
}

export { handleFollowUser, handleUnfollowUser }
