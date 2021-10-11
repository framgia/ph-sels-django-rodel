import { 
  authSignupSuccess,
  authSignupFail,
} from './response'

import { baseURL } from '../../../adapters'

// const handleSignup = async (user_data, dispatch) => {
//   const url = `${baseURL}users/`
//   const resquestOption = {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(user_data)
//   }

//   await fetch(url, resquestOption)
//   .then( res => {
//     if (res.ok) {
//       return res.json()
//     } else {
//       throw res.json()
//     }
//   })
//   .then(data =>{
//     dispatch(authSignupSuccess(data))
//   })
//   .catch(err => {
//     dispatch(authSignupFail(err))
//   })
// }


const _handleSignup = async (user_data) => {
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
  return await response
}

const handleSignup = (user_data, dispatch) => {
  const response = _handleSignup(user_data)
  
  response.then( res => {
    if (res.ok) {
      return res
    } else {
      throw res
    }
  })
  .then(data => {
    data.json().then(user=>
      dispatch(authSignupSuccess(user))
    )
  })
  .catch(err => {
    err.json().then(error=>
      dispatch(authSignupFail(error))
    )
  })

}


export {
  handleSignup
}