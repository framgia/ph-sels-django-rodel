import React from "react"
import { useDispatch } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"

import { deleteQuiz } from "../../../store/actions"

import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"
import { Stack } from "@mui/material"

const QuizDelete = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const quiz = useLocation().quiz

  const handleDeleteQuiz = () => {
    dispatch(deleteQuiz(id))
    history.push("/quiz")
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
        Are you sure you want to delete {quiz?.name || "this Quiz"} ?
      </Typography>
      <br />
      <Stack direction="row" spacing="2rem" sx={{ justifyContent: "center" }}>
        <Button
          sx={{ mx: "auto", mb: 1, width: "50ch", borderRadius: "5px" }}
          type="secondary"
          color="secondary"
          variant="contained"
          onClick={handleDeleteQuiz}
        >
          Yes, Delete
        </Button>
        <Button
          sx={{ mx: "auto", mb: 1, width: "50ch", borderRadius: "5px" }}
          type="secondary"
          color="primary"
          variant="contained"
          onClick={() => history.push("/quiz")}
        >
          Cancel
        </Button>
      </Stack>
    </Box>
  )
}

export default QuizDelete
