

import { 
  handleGetUserList
} from "./handler"



const getUserList = () => {
  return dispatch => {
    handleGetUserList(dispatch)
  }
}


export {
  getUserList,
}
