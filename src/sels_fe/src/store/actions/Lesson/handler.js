import {
  postLessonSuccess,
  postLessonFail,
  postBulkLessonSuccess,
  postBulkLessonFail,
  getLessonSuccess,
  getLessonFail,
  getLessonListSuccess,
  getLessonListFail,
  updateLessonSuccess,
  updateLessonFail,
  deleteLessonSuccess,
  deleteLessonFail,
} from "./response"

import { baseURL } from "../../../adapters"

const postLesson = async (data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}lesson/`
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

const postBulkLesson = async (data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}lessons/bulk`
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

const fetchLesson = async (lesson_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}lesson/`
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

const fetchLessonList = async () => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}lesson/`
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

const updateLesson = async (lesson_id, data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}lesson/${lesson_id}/`
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

const deleteLesson = async (lesson_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}lesson/${lesson_id}/`
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

function handlePostLesson(data, dispatch) {
  const response = postLesson(data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postLessonSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postLessonFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handlePostBulkLesson(data, dispatch) {
  const response = postBulkLesson(data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postBulkLessonSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postBulkLessonFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleGetLesson(lesson_id, dispatch) {
  const response = fetchLesson(lesson_id)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getLessonSuccess(data)))
    .catch((error) => dispatch(getLessonFail(error)))
}

function handleGetLessonList(dispatch) {
  const response = fetchLessonList()
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getLessonListSuccess(data)))
    .catch((error) => dispatch(getLessonListFail(error)))
}

function handleUpdateLesson(lesson_id, lesson_data, dispatch) {
  const response = updateLesson(lesson_id, lesson_data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(updateLessonSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(updateLessonFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleDeleteLesson(lesson_id, dispatch) {
  const response = deleteLesson(lesson_id)
  response
    .then((res) => {
      if (res.ok) {
        return dispatch(deleteLessonSuccess(lesson_id))
      } else {
        throw res
      }
    })
    .then(() => console.log(`lesson ${lesson_id} deleted`))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(deleteLessonFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

export {
  handlePostLesson,
  handlePostBulkLesson,
  handleGetLesson,
  handleGetLessonList,
  handleUpdateLesson,
  handleDeleteLesson,
}
