import { 
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from "./action-types"


const getUserSuccess = users => {
  return {
    type: GET_USERS_SUCCESS,
    payload: {
      users,
    }
  }
}

const getUserFail = error => {
  return {
    type: GET_USERS_FAIL,
    payload: {
      error
    }
  }
}


export {
  getUserSuccess,
  getUserFail
}
