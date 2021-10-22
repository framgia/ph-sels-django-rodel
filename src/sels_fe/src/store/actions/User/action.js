import {
  handlePostUser,
  handleGetUser,
  handleGetUserList,
  handleUpdateUser,
  handleDeleteUser,
} from "./handler"

const postUser = (data) => {
  return (dispatch) => {
    handlePostUser(data, dispatch)
  }
}

const getUser = (user_id) => {
  return (dispatch) => {
    handleGetUser(user_id, dispatch)
  }
}

const getUserList = () => {
  return (dispatch) => {
    handleGetUserList(dispatch)
  }
}

const updateUser = (user_id, data) => {
  return (dispatch) => {
    handleUpdateUser(user_id, data, dispatch)
  }
}

const deleteUser = (user_id) => {
  return (dispatch) => {
    handleDeleteUser(user_id, dispatch)
  }
}

export { postUser, getUser, getUserList, updateUser, deleteUser }
