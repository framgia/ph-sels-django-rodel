import { 
  handleFollowedUserList
} from "./handler"



const getFollowedUserList = () => {
  return dispatch => {
    handleFollowedUserList(dispatch)
  }
}


export {
  getFollowedUserList,
}
