import {
  handlePostQuestion,
  handleGetQuestion,
  handleGetQuestionList,
  handleUpdateQuestion,
  handleDeleteQuestion,
} from "./handler"

const postQuestion = (data) => {
  return (dispatch) => {
    handlePostQuestion(data, dispatch)
  }
}

const getQuestion = (question_id) => {
  return (dispatch) => {
    handleGetQuestion(question_id, dispatch)
  }
}

const getQuestionList = () => {
  return (dispatch) => {
    handleGetQuestionList(dispatch)
  }
}

const updateQuestion = (question_id) => {
  return (dispatch) => {
    handleUpdateQuestion(dispatch)
  }
}

const deleteQuestion = (question_id) => {
  return (dispatch) => {
    handleDeleteQuestion(dispatch)
  }
}

export {
  postQuestion,
  getQuestion,
  getQuestionList,
  updateQuestion,
  deleteQuestion,
}
