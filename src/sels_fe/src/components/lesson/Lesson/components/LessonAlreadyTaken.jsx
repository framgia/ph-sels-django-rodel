import React from "react"
import { useHistory } from "react-router-dom"

import { Typography, Button } from "@mui/material"

const LessonAlreadyTaken = () => {
  const history = useHistory()

  return (
    <>
      <br />
      <Typography variant="h5" color="primary">
        You've already taken this Quiz.
      </Typography>
      <br />
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.push(`/lesson`)}
      >
        Go Back to Categories
      </Button>
    </>
  )
}

export default LessonAlreadyTaken
