import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
// import { useHistory } from 'react-router-dom';

import { updateQuiz } from "../../../store/actions"

import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"

import QuizUpdateForm from "./components/QuizForm"

const QuizUpdate = () => {
  const [quiz, setQuiz] = useState({
    name: "",
    description: "",
  })
  const dispatch = useDispatch()
  const { id } = useParams()
  // const history = useHistory()
  const { isAuthenticated } = useSelector((state) => state.Signin)
  const error = useSelector((state) => state.Quiz.error)

  const handleChange = (event) => {
    const { name, value } = event.target
    setQuiz({ ...quiz, [name]: value })
  }

  const handleSubmitQuiz = () => {
    dispatch(updateQuiz(id, quiz))
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
        Update Quiz
      </Typography>
      <QuizUpdateForm quiz={quiz} onChange={handleChange} error={error} />
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

export default QuizUpdate
