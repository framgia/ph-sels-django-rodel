import {
  handlePostChoice,
  handlePostBulkChoice,
  handleGetChoice,
  handleGetChoiceList,
  handleUpdateChoice,
  handleDeleteChoice,
} from "./handler"

const postChoice = (data) => {
  return (dispatch) => {
    handlePostChoice(data, dispatch)
  }
}

const postBulkChoice = (data) => {
  console.log(data)
  return (dispatch) => {
    handlePostBulkChoice(data, dispatch)
  }
}

const getChoice = (choice_id) => {
  return (dispatch) => {
    handleGetChoice(choice_id, dispatch)
  }
}

const getChoiceList = () => {
  return (dispatch) => {
    handleGetChoiceList(dispatch)
  }
}

const updateChoice = (choice_id) => {
  return (dispatch) => {
    handleUpdateChoice(dispatch)
  }
}

const deleteChoice = (choice_id) => {
  return (dispatch) => {
    handleDeleteChoice(dispatch)
  }
}

export {
  postChoice,
  postBulkChoice,
  getChoice,
  getChoiceList,
  updateChoice,
  deleteChoice,
}
