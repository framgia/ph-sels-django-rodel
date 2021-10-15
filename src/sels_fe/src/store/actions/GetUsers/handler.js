import { 
  getUserSuccess,
  getUserFail
} from './response'

import { baseURL } from '../../../adapters'



const fetchUserList =  () => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}users/`
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


function handleGetUserList(dispatch) {
  const response = fetchUserList()
  response.then( res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res.json()
    }
  })
  .then(users => {
    dispatch(getUserSuccess(users))
  })
  .catch( error => {
    dispatch(getUserFail(error))
  })
}

export {
  handleGetUserList
}