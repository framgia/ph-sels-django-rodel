import { 
  followUserSuccess,
  followUserFail,
  unfollowUserSuccess,
  unfollowUserFail
} from './response'

import { baseURL } from '../../../adapters'



const _handleFollowUser = async (follower, followee) => {
  const data = {
    "follower": follower,
    "followee": followee
  }
  console.log(data)
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}follow-user/`
  const resquestOption = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${accessToken}`
    }, 
    body: JSON.stringify(data)
  }
  const response = await fetch(url, resquestOption)
  return  response
}


function handleFollowUser(follower, followee, dispatch) {
  const response = _handleFollowUser(follower, followee)
  response.then( res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res.json()
    }
  })
  .then(user => {
    dispatch(followUserSuccess(user))
  })
  .catch( error => {
    dispatch(followUserFail(error))
  })
}

const _handleUnfollowUser = async (follow_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}follows/${follow_id}/`
  const resquestOption = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${accessToken}`
    }, 
  }
  const response = await fetch(url, resquestOption)
  return  response
}


function handleUnfollowUser(follow_id,  dispatch) {
  const response = _handleUnfollowUser(follow_id)
  response.then( res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res.json()
    }
  })
  .then(user => {
    dispatch(unfollowUserSuccess(user))
  })
  .catch( error => {
    dispatch(unfollowUserFail(error))
  })
}

export {
  handleFollowUser,
  handleUnfollowUser
}