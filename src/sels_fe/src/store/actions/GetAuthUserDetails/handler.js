import { 
  getAuthUserDetailsSuccess,
  getAuthUserDetailsFail
} from './response'

import { baseURL } from '../../../adapters'


const fetchGetAuthUserDetails =  () => {
  const accessToken = localStorage.getItem("access_token")
  const authUser = localStorage.getItem("auth_user")
  const url = `${baseURL}users/${authUser}/`
  const resquestOption = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${accessToken}`
    }, 
  }
  const response =  fetch(url, resquestOption)
  return  response
}


function handleGetAuthUserDetails(dispatch) {
  const response = fetchGetAuthUserDetails()
  response.then( res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res.json()
    }
  })
  .then(authUser => {
    dispatch(getAuthUserDetailsSuccess(authUser))
  })
  .catch( error => {
    dispatch(getAuthUserDetailsFail(error))
  })
}

export {
  handleGetAuthUserDetails
}