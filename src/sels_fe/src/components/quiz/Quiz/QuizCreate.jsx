import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { postQuiz, getQuizList, updateQuiz } from "../../../store/actions"

import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"

import QuizForm from "./components/QuizForm"

const QuizCreate = () => {
  const dispatch = useDispatch()
  const [quiz, setQuiz] = useState({
    name: "",
    description: "",
  })
  const error = useSelector((state) => state.Quiz.error)
  let quizzes = useSelector((state) => state.Quiz.quiz_list)
  let currentQuiz = null

  const handleChange = (event) => {
    const { name, value } = event.target
    setQuiz({ ...quiz, [name]: value })
  }

  const handleSubmitQuiz = () => {
    quiz.name === currentQuiz.name
      ? dispatch(updateQuiz(currentQuiz.id, quiz))
      : dispatch(postQuiz(quiz))
  }

  useEffect(() => {
    currentQuiz ? (currentQuiz = quizzes.at(-1)) : console.log(currentQuiz)
  }, [quizzes])

  useEffect(() => {
    dispatch(getQuizList())
  }, [dispatch])

  return (
    <Box
      component="form"
      type="submit"
      noValidate
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
      sx={{ m: "1rem", mx: "auto", maxWidth: "60%" }}
    >
      <Typography variant="h4" color="primary">
        Create New Quiz
      </Typography>
      <QuizForm quiz={quiz} onChange={handleChange} error={error} />
      <br />
      <Button
        sx={{ mx: "auto", mb: 1, width: "50ch", borderRadius: "5px" }}
        type="secondary"
        color="primary"
        variant="contained"
        onClick={handleSubmitQuiz}
      >
        Save
      </Button>
    </Box>
  )
}

export default QuizCreate
