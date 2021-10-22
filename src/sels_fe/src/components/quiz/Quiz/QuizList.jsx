import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"

import Quizzes from "./components/Quizzes"

const QuizList = ({ quizzes }) => {
  const [update, setupdate] = useState(false)
  const history = useHistory()

  useEffect(() => {
    setupdate(!update)
  }, [history])

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "60%" }}>
      <Typography variant="h4" color="primary">
        Quizzes
      </Typography>
      <Quizzes quizzes={quizzes} />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/quiz/new")}
        sx={{ mt: "2rem" }}
      >
        Create New Quiz
      </Button>
    </Box>
  )
}

export default QuizList
