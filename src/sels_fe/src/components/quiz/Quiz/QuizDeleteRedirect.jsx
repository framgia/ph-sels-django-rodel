import React from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"

import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"
import { Stack } from "@mui/material"

const QuizDelete = () => {
  const { id } = useParams()
  const history = useHistory()
  return (
    <Box type="div" sx={{ m: "1rem", mx: "auto", maxWidth: "60%" }}>
      <Typography variant="h5" color="primary">
        Quiz Successfully Deleted.
      </Typography>
      <Stack direction="row" spacing="2rem" sx={{ justifyContent: "center" }}>
        <Button
          sx={{ mx: "auto", mb: 1, width: "50ch", borderRadius: "5px" }}
          type="secondary"
          color="primary"
          variant="contained"
          onClick={() => history.push("/quiz")}
        >
          Quizzes
        </Button>
      </Stack>
    </Box>
  )
}

export default QuizDelete
