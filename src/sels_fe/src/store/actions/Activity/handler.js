import {
  postActivitySuccess,
  postActivityFail,
  postBulkActivitySuccess,
  postBulkActivityFail,
  getActivitySuccess,
  getActivityFail,
  getActivityListSuccess,
  getActivityListFail,
  updateActivitySuccess,
  updateActivityFail,
  deleteActivitySuccess,
  deleteActivityFail,
} from "./response"

import { baseURL } from "../../../adapters"

const postActivity = async (data) => {
  console.log(data)
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}activity/`
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

const postBulkActivity = async (data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}activities/bulk`
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

const fetchActivity = async (activity_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}activity/`
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

const fetchActivityList = async () => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}activity/`
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

const updateActivity = async (activity_id, data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}activity/${activity_id}/`
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

const deleteActivity = async (activity_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}activity/${activity_id}/`
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

function handlePostActivity(data, dispatch) {
  const response = postActivity(data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postActivitySuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postActivityFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handlePostBulkActivity(data, dispatch) {
  const response = postBulkActivity(data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postBulkActivitySuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postBulkActivityFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleGetActivity(activity_id, dispatch) {
  const response = fetchActivity(activity_id)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getActivitySuccess(data)))
    .catch((error) => dispatch(getActivityFail(error)))
}

function handleGetActivityList(dispatch) {
  const response = fetchActivityList()
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(getActivityListSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(getActivityListFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleUpdateActivity(activity_id, activity_data, dispatch) {
  const response = updateActivity(activity_id, activity_data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(updateActivitySuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(updateActivityFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleDeleteActivity(activity_id, dispatch) {
  const response = deleteActivity(activity_id)
  response
    .then((res) => {
      if (res.ok) {
        return dispatch(deleteActivitySuccess(activity_id))
      } else {
        throw res
      }
    })
    .then(() => console.log(`activity ${activity_id} deleted`))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(deleteActivityFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

export {
  handlePostActivity,
  handlePostBulkActivity,
  handleGetActivity,
  handleGetActivityList,
  handleUpdateActivity,
  handleDeleteActivity,
}
