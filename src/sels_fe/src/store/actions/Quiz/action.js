import {
  handlePostQuiz,
  handleGetQuiz,
  handleGetQuizList,
  handleUpdateQuiz,
  handleDeleteQuiz,
} from "./handler"

const postQuiz = (quiz_data) => {
  return (dispatch) => {
    handlePostQuiz(quiz_data, dispatch)
  }
}

const getQuiz = (quiz_id) => {
  return (dispatch) => {
    const data = handleGetQuiz(quiz_id, dispatch)
    return data
  }
}

const getQuizList = () => {
  return (dispatch) => {
    handleGetQuizList(dispatch)
  }
}

const updateQuiz = (quiz_id, data) => {
  return (dispatch) => {
    handleUpdateQuiz(quiz_id, data, dispatch)
  }
}

const deleteQuiz = (quiz_id) => {
  return (dispatch) => {
    handleDeleteQuiz(quiz_id, dispatch)
  }
}

export { postQuiz, getQuiz, getQuizList, updateQuiz, deleteQuiz }
