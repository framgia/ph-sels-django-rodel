import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"

import { postQuestion, getQuestionList } from "../../../store/actions"

import Button from "@material-ui/core/Button"
import { Box, OutlinedInput, TextField, Typography } from "@material-ui/core"

import { CustomFormControl } from "./components/CustomFormControl"
import { CustomInputLabel } from "./components/CustomInputLabel"

const QuestionCreate = () => {
  const { id } = useParams()
  const [question, setQuestion] = useState({
    question: "",
    description: "",
    quiz: parseInt(id),
  })
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = (event) => {
    const { name, value } = event.target
    setQuestion({ ...question, [name]: value })
  }

  const handleSubmitQuestion = () => {
    dispatch(postQuestion(question))
    history.push(`/quiz/${id}`)
  }

  useEffect(() => {
    dispatch(getQuestionList())
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
        Create New Question
      </Typography>
      <CustomFormControl>
        <CustomInputLabel labelFor={`question-name`} label="Question Name" />
        <OutlinedInput
          required
          id={`question-name`}
          type="text"
          name="question"
          label="Question Name"
          value={question.question}
          onChange={handleChange}
          sx={{ width: "50ch" }}
        />
      </CustomFormControl>
      <CustomFormControl>
        <TextField
          id={`question-description`}
          type="text"
          name="description"
          label="Description"
          multiline
          maxRows={4}
          variant="outlined"
          value={question.description}
          onChange={handleChange}
          sx={{ width: "50ch" }}
        />
      </CustomFormControl>
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

export default QuestionCreate
