import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"

import { deleteQuestion } from "../../../store/actions"

import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"
import { Stack } from "@mui/material"

const QuestionDelete = () => {
  const [question, setQuestion] = useState({
    question: "",
    description: "",
  })
  const { id, question_id } = useParams()
  const [update, setUpdate] = useState(false)
  const [questiondetails, setQuestiondetails] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const error = useSelector((state) => state.Question.error)
  const { question_list } = useSelector((state) => state.Question)

  const handleChange = (index, event) => {
    const { name, value } = event.target
    setQuestion({ ...question, [name]: value })
  }

  useEffect(() => {
    setQuestion(
      question_list.find((quest) => quest.id === parseInt(question_id))
    )
  }, [question_id])

  const handleDeleteQuestion = () => {
    console.log(question)
    dispatch(deleteQuestion(question_id))
    history.push(`/quiz/${id}`)
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
      <Typography variant="h5" color="primary">
        Are you sure you want to delete {question?.name || "this Question"} ?
      </Typography>
      <br />
      <Stack direction="row" spacing="2rem" sx={{ justifyContent: "center" }}>
        <Button
          sx={{ mx: "auto", mb: 1, width: "50ch", borderRadius: "5px" }}
          type="secondary"
          color="secondary"
          variant="contained"
          onClick={handleDeleteQuestion}
        >
          Yes, Delete
        </Button>
        <Button
          sx={{ mx: "auto", mb: 1, width: "50ch", borderRadius: "5px" }}
          type="secondary"
          color="primary"
          variant="contained"
          onClick={() => history.push(`/quiz/${id}/question/${question_id}`)}
        >
          Cancel
        </Button>
      </Stack>
    </Box>
  )
}

export default QuestionDelete
