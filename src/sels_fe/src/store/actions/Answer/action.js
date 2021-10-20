import {
  handlePostAnswer,
  handleGetAnswer,
  handleGetAnswerList,
  handleUpdateAnswer,
  handleDeleteAnswer,
} from "./handler"

const postAnswer = (data) => {
  return (dispatch) => {
    handlePostAnswer(data, dispatch)
  }
}

const getAnswer = (answer_id) => {
  return (dispatch) => {
    handleGetAnswer(answer_id, dispatch)
  }
}

const getAnswerList = () => {
  return (dispatch) => {
    handleGetAnswerList(dispatch)
  }
}

const updateAnswer = (answer_id, data) => {
  return (dispatch) => {
    handleUpdateAnswer(answer_id, data, dispatch)
  }
}

const deleteAnswer = (answer_id) => {
  return (dispatch) => {
    handleDeleteAnswer(answer_id, dispatch)
  }
}

export { postAnswer, getAnswer, getAnswerList, updateAnswer, deleteAnswer }
