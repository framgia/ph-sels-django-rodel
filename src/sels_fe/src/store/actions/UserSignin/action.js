import { handleSignin } from "./handler"


const authSignin = (user_data) => {
  return dispatch => {
    handleSignin(user_data, dispatch)
  }
}


export default authSignup