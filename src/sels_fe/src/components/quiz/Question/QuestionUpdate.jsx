import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useHistory, useLocation } from "react-router-dom"

import { updateQuestion } from "../../../store/actions"

import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"

import QuestionUpdateForm from "./components/QuestionForm"

const QuestionUpdate = () => {
  const [question, setQuestion] = useState({
    question: "",
    description: "",
  })
  const dispatch = useDispatch()
  const location = useLocation()
  const { id } = useParams()
  const history = useHistory()
  const error = useSelector((state) => state.Question.error)
  const { question_list } = useSelector((state) => state.Question)

  const handleChange = (index, event) => {
    const { name, value } = event.target
    setQuestion({ ...question, [name]: value })
  }

  useEffect(() => {
    const q = question_list?.find((item) => parseInt(item.id) === parseInt(id))
    setQuestion({
      ...question,
      question: q.question,
      description: q.description,
    })
  }, [question_list])

  const handleSubmitQuestion = () => {
    console.log(question)
    dispatch(updateQuestion(id, question))
    history.push(`/quiz/${location.quiz.id}`)
  }

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
        Update Question
      </Typography>
      <QuestionUpdateForm
        question={question}
        onChange={handleChange}
        error={error}
      />
      <br />
      <Button
        sx={{ mx: "auto", mb: 1, width: "50ch", borderRadius: "5px" }}
        type="secondary"
        color="primary"
        variant="contained"
        onClick={handleSubmitQuestion}
      >
        Save
      </Button>
    </Box>
  )
}

export default QuestionUpdate
