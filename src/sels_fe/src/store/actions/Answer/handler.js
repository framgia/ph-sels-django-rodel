import {
  postAnswerSuccess,
  postAnswerFail,
  getAnswerSuccess,
  getAnswerFail,
  getAnswerListSuccess,
  getAnswerListFail,
  updateAnswerSuccess,
  updateAnswerFail,
  deleteAnswerSuccess,
  deleteAnswerFail,
} from "./response"

import { baseURL } from "../../../adapters"

const postAnswer = async (data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}answer/`
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

const fetchAnswer = async (answer_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}answer/`
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

const fetchAnswerList = async () => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}answer/`
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

const updateAnswer = async (answer_id, data) => {
  console.log(answer_id, data)
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}answer/${answer_id}/`
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

const deleteAnswer = async (answer_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}answer/${answer_id}/`
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

function handlePostAnswer(data, dispatch) {
  const response = postAnswer(data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postAnswerSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postAnswerFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleGetAnswer(answer_id, dispatch) {
  const response = fetchAnswer(answer_id)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getAnswerSuccess(data)))
    .catch((error) => dispatch(getAnswerFail(error)))
}

function handleGetAnswerList(dispatch) {
  const response = fetchAnswerList()
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(getAnswerListSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(getAnswerListFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleUpdateAnswer(answer_id, data, dispatch) {
  const response = updateAnswer(answer_id, data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(updateAnswerSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(updateAnswerFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleDeleteAnswer(answer_id, dispatch) {
  const response = deleteAnswer(answer_id)
  response
    .then((res) => {
      if (res.ok) {
        return dispatch(deleteAnswerSuccess(answer_id))
      } else {
        throw res.json()
      }
    })
    .then(() => console.log(`answer ${answer_id} deleted`))
    .catch((error) => dispatch(deleteAnswerFail(error)))
}

export {
  handlePostAnswer,
  handleGetAnswer,
  handleGetAnswerList,
  handleUpdateAnswer,
  handleDeleteAnswer,
}
