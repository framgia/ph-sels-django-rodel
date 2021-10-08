import { handleSignup } from "./handler"


const authSignup = (user_data) => {
  return dispatch => {
    handleSignup(user_data, dispatch)
  }
}


export default authSignup