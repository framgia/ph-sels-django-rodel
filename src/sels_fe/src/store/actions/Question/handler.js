import {
  postQuestionSuccess,
  postQuestionFail,
  getQuestionSuccess,
  getQuestionFail,
  getQuestionListSuccess,
  getQuestionListFail,
  updateQuestionSuccess,
  updateQuestionFail,
  deleteQuestionSuccess,
  deleteQuestionFail,
} from "./response"

import { baseURL } from "../../../adapters"

const postQuestion = async (data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}question/`
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

const fetchQuestion = async (question_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}question/`
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

const fetchQuestionList = async () => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}question/`
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

const updateQuestion = async (question_id, data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}question/${question_id}/`
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

const deleteQuestion = async (question_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}question/${question_id}/`
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

function handlePostQuestion(data, dispatch) {
  const response = postQuestion(data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postQuestionSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postQuestionFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleGetQuestion(question_id, dispatch) {
  const response = fetchQuestion(question_id)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getQuestionSuccess(data)))
    .catch((error) => dispatch(getQuestionFail(error)))
}

function handleGetQuestionList(dispatch) {
  const response = fetchQuestionList()
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getQuestionListSuccess(data)))
    .catch((error) => dispatch(getQuestionListFail(error)))
}

function handleUpdateQuestion(question_id, question_data, dispatch) {
  const response = updateQuestion(question_id, question_data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(updateQuestionSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(updateQuestionFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleDeleteQuestion(question_id, dispatch) {
  const response = deleteQuestion(question_id)
  response
    .then((res) => {
      if (res.ok) {
        return dispatch(deleteQuestionSuccess(question_id))
      } else {
        throw res
      }
    })
    .then(() => console.log(`question ${question_id} deleted`))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(deleteQuestionFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

export {
  handlePostQuestion,
  handleGetQuestion,
  handleGetQuestionList,
  handleUpdateQuestion,
  handleDeleteQuestion,
}
