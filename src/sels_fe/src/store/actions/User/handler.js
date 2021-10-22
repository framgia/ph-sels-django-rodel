import {
  postUserSuccess,
  postUserFail,
  getUserSuccess,
  getUserFail,
  getUserListSuccess,
  getUserListFail,
  updateUserSuccess,
  updateUserFail,
  deleteUserSuccess,
  deleteUserFail,
} from "./response"

import { baseURL } from "../../../adapters"

const postUser = async (data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}users/`
  const resquestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  }
  const response = await fetch(url, resquestOption)
  return await response
}

const fetchUser = async (user_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}users/`
  const resquestOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  }
  const response = await fetch(url, resquestOption)
  return await response
}

const fetchUserList = async () => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}users/`
  const resquestOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  }
  const response = await fetch(url, resquestOption)
  return await response
}

const updateUser = async (user_id, data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}users/${user_id}/`
  const resquestOption = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  }
  const response = await fetch(url, resquestOption)
  return await response
}

const deleteUser = async (user_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}users/${user_id}/`
  const resquestOption = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  }
  const response = await fetch(url, resquestOption)
  return await response
}

function handlePostUser(data, dispatch) {
  const response = postUser(data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postUserSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postUserFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleGetUser(user_id, dispatch) {
  const response = fetchUser(user_id)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getUserSuccess(data)))
    .catch((error) => dispatch(getUserFail(error)))
}

function handleGetUserList(dispatch) {
  const response = fetchUserList()
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getUserListSuccess(data)))
    .catch((error) => dispatch(getUserListFail(error)))
}

function handleUpdateUser(user_id, user_data, dispatch) {
  const response = updateUser(user_id, user_data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(updateUserSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(updateUserFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleDeleteUser(user_id, dispatch) {
  const response = deleteUser(user_id)
  response
    .then((res) => {
      if (res.ok) {
        return dispatch(deleteUserSuccess(user_id))
      } else {
        throw res
      }
    })
    .then(() => console.log(`user ${user_id} deleted`))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(deleteUserFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

export {
  handlePostUser,
  handleGetUser,
  handleGetUserList,
  handleUpdateUser,
  handleDeleteUser,
}
