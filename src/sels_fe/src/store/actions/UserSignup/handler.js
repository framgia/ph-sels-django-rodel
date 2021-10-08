import { 
  authSignupSuccess,
  authSignupFail,
} from './response'

import { baseURL } from '../../../adapters'

const handleSignup = async (user_data, dispatch) => {
  const url = `${baseURL}users/`
  const resquestOption = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user_data)
  }

  const response = await fetch(url, resquestOption)
  .then( res => {
    if (res.ok) {
      return res.json();
    } else {
      throw res.json()
    }
  })
  .then(data =>{
    dispatch(authSignupSuccess(user_data, data))
  })
  .catch(err => {
    err.then(error=>{
      dispatch(authSignupFail(error))
    })
  })
}



export {
  handleSignup
}