import {
  postUserSuccess,
  getUserSuccess,
  getUserListSuccess,
  updateUserSuccess,
  deleteUserSuccess,
} from "./response"

import api from "../../../adapters"

function handlePostUser(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`users/`, post_data)
    dispatch(postUserSuccess(response.data))
  })()
}

function handleGetUser(user_id, dispatch) {
  ;(async () => {
    const response = await api.get(`users/${user_id}/`)
    dispatch(getUserSuccess(response.data))
  })()
}

function handleGetUserList(dispatch) {
  ;(async () => {
    const response = await api.get(`users/`)
    dispatch(getUserListSuccess(response.data))
  })()
}

function handleUpdateUser(user_id, data, dispatch) {
  ;(async () => {
    const response = await api.put(`users/${user_id}/`, data)
    dispatch(updateUserSuccess(response.data))
  })()
}

function handleDeleteUser(user_id, dispatch) {
  ;(async () => {
    await api.delete(`users/${user_id}/`)
    dispatch(deleteUserSuccess(user_id))
  })()
}

export {
  handlePostUser,
  handleGetUser,
  handleGetUserList,
  handleUpdateUser,
  handleDeleteUser,
}
