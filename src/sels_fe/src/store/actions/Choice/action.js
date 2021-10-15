import {
  handlePostChoice,
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

export { postChoice, getChoice, getChoiceList, updateChoice, deleteChoice }
