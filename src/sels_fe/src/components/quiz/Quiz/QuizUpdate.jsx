import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

import { updateQuiz } from "../../../store/actions"

import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"

import QuizUpdateForm from "./components/QuizUpdateForm"

const QuizUpdate = () => {
  const [quiz, setQuiz] = useState({
    name: "",
    description: "",
  })
  const dispatch = useDispatch()
  const { id } = useParams()
  const history = useHistory()
  const error = useSelector((state) => state.Quiz.error)
  const { quiz_list } = useSelector((state) => state.Quiz)

  const handleChange = (event) => {
    const { name, value } = event.target
    setQuiz({ ...quiz, [name]: value })
  }
  useEffect(() => {
    const q = quiz_list?.find((item) => parseInt(item.id) === parseInt(id))
    setQuiz({ ...quiz, name: q.name, description: q.description })
  }, [quiz_list])

  const handleSubmitQuiz = () => {
    dispatch(updateQuiz(id, quiz))
    history.push("/quiz")
  }

  return (
    <Box sx={{ m: "1rem", mx: "auto", maxWidth: "60%" }}>
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
