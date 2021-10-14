

import { 
  handleGetAuthUserDetails,
} from "./handler"


const  getAuthUserDetails = () => {
  return dispatch => {
    handleGetAuthUserDetails(dispatch)
  }
}


export { getAuthUserDetails }
