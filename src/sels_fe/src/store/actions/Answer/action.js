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

const getAnswer = (qnswer_id) => {
  return (dispatch) => {
    handleGetAnswer(qnswer_id, dispatch)
  }
}

const getAnswerList = () => {
  return (dispatch) => {
    handleGetAnswerList(dispatch)
  }
}

const updateAnswer = (qnswer_id) => {
  return (dispatch) => {
    handleUpdateAnswer(dispatch)
  }
}

const deleteAnswer = (qnswer_id) => {
  return (dispatch) => {
    handleDeleteAnswer(dispatch)
  }
}

export { postAnswer, getAnswer, getAnswerList, updateAnswer, deleteAnswer }
