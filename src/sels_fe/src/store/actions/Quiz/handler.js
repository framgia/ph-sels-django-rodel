import {
  postQuizSuccess,
  postQuizFail,
  getQuizSuccess,
  getQuizFail,
  getQuizListSuccess,
  getQuizListFail,
  updateQuizSuccess,
  updateQuizFail,
  deleteQuizSuccess,
  deleteQuizFail,
} from "./response"

import { baseURL } from "../../../adapters"

const accessToken = localStorage.getItem("access_token")

const _handlePostQuiz = async (data) => {
  const url = `${baseURL}quiz/`
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

const fetchQuiz = async (quiz_id) => {
  const url = `${baseURL}quiz/`
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

const fetchQuizList = async (query) => {
  const url = query?.search
    ? `${baseURL}quiz/?search=${query.search}`
    : `${baseURL}quiz/`
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

const updateQuiz = async (quiz_id, data) => {
  const url = `${baseURL}quiz/${quiz_id}/`
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

const deleteQuiz = async (quiz_id) => {
  const url = `${baseURL}quiz/${quiz_id}/`
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

function handlePostQuiz(post_data, dispatch) {
  const response = _handlePostQuiz(post_data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postQuizSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postQuizFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
  return post_data
}

function handleGetQuiz(quiz_id, dispatch) {
  const response = fetchQuiz(quiz_id)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(getQuizSuccess(data)))
    .catch((err) => {
      err.json().then((error) => dispatch(getQuizFail(error)))
    })
}

function handleGetQuizList(query, dispatch) {
  const response = fetchQuizList(query)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getQuizListSuccess(data)))
    .catch((error) => dispatch(getQuizListFail(error)))
}

function handleUpdateQuiz(quiz_id, data, dispatch) {
  const response = updateQuiz(quiz_id, data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(updateQuizSuccess(data)))
    .catch((error) => dispatch(updateQuizFail(error)))
}

function handleDeleteQuiz(quiz_id, dispatch) {
  const response = deleteQuiz(quiz_id)
  response
    .then((res) => {
      console.log(res)
      if (res.ok) {
        dispatch(deleteQuizSuccess(quiz_id))
      } else {
        throw res
      }
    })
    .then((data) => {
      console.log("Quiz deleted.")
    })
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(deleteQuizFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

export {
  handlePostQuiz,
  handleGetQuiz,
  handleGetQuizList,
  handleUpdateQuiz,
  handleDeleteQuiz,
}
