import { 
  getFollowedUserSuccess,
  getFollowedUserFail
} from './response'

import { baseURL } from '../../../adapters'



const fetchFollowedUserList =  () => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}follows/following/`
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


function handleFollowedUserList(dispatch) {
  const response = fetchFollowedUserList()
  response.then( res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res.json()
    }
  })
  .then(users => {
    dispatch(getFollowedUserSuccess(users))
  })
  .catch( error => {
      dispatch(getFollowedUserFail(error))
  })
}

export {
  handleFollowedUserList
}