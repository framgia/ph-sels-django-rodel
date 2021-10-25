import {
  handlePostAnswered,
  handlePostBulkAnswered,
  handleGetAnswered,
  handleGetAnsweredList,
  handleUpdateAnswered,
  handleDeleteAnswered,
} from "./handler"

const postAnswered = (data) => {
  return (dispatch) => {
    handlePostAnswered(data, dispatch)
  }
}

const postBulkAnswered = (data) => {
  return (dispatch) => {
    handlePostBulkAnswered(data, dispatch)
  }
}

const getAnswered = (answered_id) => {
  return (dispatch) => {
    handleGetAnswered(answered_id, dispatch)
  }
}

const getAnsweredList = () => {
  return (dispatch) => {
    handleGetAnsweredList(dispatch)
  }
}

const updateAnswered = (answered_id, data) => {
  return (dispatch) => {
    handleUpdateAnswered(answered_id, data, dispatch)
  }
}

const deleteAnswered = (answered_id) => {
  return (dispatch) => {
    handleDeleteAnswered(answered_id, dispatch)
  }
}

export {
  postAnswered,
  postBulkAnswered,
  getAnswered,
  getAnsweredList,
  updateAnswered,
  deleteAnswered,
}
