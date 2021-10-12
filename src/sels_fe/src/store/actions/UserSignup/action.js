import { handleSignup } from "../UserSignup/handler"


const authSignup = (user_data) => {
  return dispatch => {
    handleSignup(user_data, dispatch)
  }
}


export { authSignup } 
