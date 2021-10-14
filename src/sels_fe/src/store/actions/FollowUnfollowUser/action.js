import { 
  handleFollowUser,
  handleUnfollowUser
} from "./handler"



const followUser = (follower, followee) => {
  return dispatch => {
    handleFollowUser(follower, followee, dispatch)
  }
}

const unfollowUser = (follow_id) => {
  return dispatch => {
    handleUnfollowUser(follow_id, dispatch)
  }
}


export {
  followUser,
  unfollowUser
}
