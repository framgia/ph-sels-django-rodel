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

const updateQuestion = (question_id, data) => {
  return (dispatch) => {
    handleUpdateQuestion(question_id, data, dispatch)
  }
}

const deleteQuestion = (question_id) => {
  return (dispatch) => {
    handleDeleteQuestion(question_id, dispatch)
  }
}

export {
  postQuestion,
  getQuestion,
  getQuestionList,
  updateQuestion,
  deleteQuestion,
}
