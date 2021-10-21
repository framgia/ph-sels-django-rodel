import {
  postChoiceSuccess,
  postChoiceFail,
  postBulkChoiceSuccess,
  postBulkChoiceFail,
  getChoiceSuccess,
  getChoiceFail,
  getChoiceListSuccess,
  getChoiceListFail,
  updateChoiceSuccess,
  updateChoiceFail,
  deleteChoiceSuccess,
  deleteChoiceFail,
} from "./response"

import { baseURL } from "../../../adapters"

const postChoice = async (data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}choice/`
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

const postBulkChoice = async (data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}choices/bulk`
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

const fetchChoice = async (choice_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}choice/`
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

const fetchChoiceList = async () => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}choice/`
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

const updateChoice = async (choice_id, data) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}choice/${choice_id}/`
  const resquestOption = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(choice_id),
  }
  const response = await fetch(url, resquestOption)
  return await response
}

const deleteChoice = async (choice_id) => {
  const accessToken = localStorage.getItem("access_token")
  const url = `${baseURL}choice/${choice_id}/`
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

function handlePostChoice(data, dispatch) {
  const response = postChoice(data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postChoiceSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postChoiceFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handlePostBulkChoice(data, dispatch) {
  const response = postBulkChoice(data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then((data) => dispatch(postBulkChoiceSuccess(data)))
    .catch((err) => {
      try {
        err.json().then((error) => dispatch(postBulkChoiceFail(error)))
      } catch (e) {
        console.log(err)
      }
    })
}

function handleGetChoice(choice_id, dispatch) {
  const response = fetchChoice(choice_id)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getChoiceSuccess(data)))
    .catch((error) => dispatch(getChoiceFail(error)))
}

function handleGetChoiceList(dispatch) {
  const response = fetchChoiceList()
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(getChoiceListSuccess(data)))
    .catch((error) => dispatch(getChoiceListFail(error)))
}

function handleUpdateChoice(choice_id, data, dispatch) {
  const response = updateChoice(choice_id, data)
  response
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.json()
      }
    })
    .then((data) => dispatch(updateChoiceSuccess(data)))
    .catch((error) => dispatch(updateChoiceFail(error)))
}

function handleDeleteChoice(choice_id, dispatch) {
  const response = deleteChoice(choice_id)
  response
    .then((res) => {
      if (res.ok) {
        return dispatch(deleteChoiceSuccess(choice_id))
      } else {
        throw res.json()
      }
    })
    .then(() => console.log(`choice ${choice_id} deleted`))
    .catch((error) => dispatch(deleteChoiceFail(error)))
}

export {
  handlePostChoice,
  handlePostBulkChoice,
  handleGetChoice,
  handleGetChoiceList,
  handleUpdateChoice,
  handleDeleteChoice,
}
