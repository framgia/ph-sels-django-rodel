import {
  postAnsweredSuccess,
  postAnsweredFail,
  postBulkAnsweredSuccess,
  postBulkAnsweredFail,
  getAnsweredSuccess,
  getAnsweredFail,
  getAnsweredListSuccess,
  getAnsweredListFail,
  updateAnsweredSuccess,
  updateAnsweredFail,
  deleteAnsweredSuccess,
  deleteAnsweredFail,
} from "./response"

import { baseURL } from "../../../adapters"

const postAnswered = async (data) => {
  console.log(data)
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}answered/`
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

const postBulkAnswered = async (data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}answereds/bulk`
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

const fetchAnswered = async (answered_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}answered/`
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

const fetchAnsweredList = async () => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}answered/`
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

const updateAnswered = async (answered_id, data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}answered/${answered_id}/`
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

const deleteAnswered = async (answered_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}answered/${answered_id}/`
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

function handlePostAnswered(data, dispatch) {
  const response = postAnswered(data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postAnsweredSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postAnsweredFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handlePostBulkAnswered(data, dispatch) {
  const response = postBulkAnswered(data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postBulkAnsweredSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postBulkAnsweredFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleGetAnswered(answered_id, dispatch) {
  const response = fetchAnswered(answered_id)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getAnsweredSuccess(data)))
    .catch((error) => dispatch(getAnsweredFail(error)))
}

function handleGetAnsweredList(dispatch) {
  const response = fetchAnsweredList()
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getAnsweredListSuccess(data)))
    .catch((error) => dispatch(getAnsweredListFail(error)))
}

function handleUpdateAnswered(answered_id, answered_data, dispatch) {
  const response = updateAnswered(answered_id, answered_data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(updateAnsweredSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(updateAnsweredFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleDeleteAnswered(answered_id, dispatch) {
  const response = deleteAnswered(answered_id)
  response
    .then((res) => {
      if (res.ok) {
        return dispatch(deleteAnsweredSuccess(answered_id))
      } else {
        throw res
      }
    })
    .then(() => console.log(`answered ${answered_id} deleted`))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(deleteAnsweredFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

export {
  handlePostAnswered,
  handlePostBulkAnswered,
  handleGetAnswered,
  handleGetAnsweredList,
  handleUpdateAnswered,
  handleDeleteAnswered,
}
