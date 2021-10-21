import React, { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"

import Questions from "./components/Questionzes"

const QuestionList = ({ questions }) => {
  const [update, setupdate] = useState(false)
  const history = useHistory()
  // const { question_list } = useSelector((state) => state.Question)

  useEffect(() => {
    setupdate(!update)
  }, [history])

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "60%" }}>
      <Typography variant="h4" color="primary">
        Questionzes
      </Typography>
      <Questions questions={questions} />
      <br />
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/question/new")}
        sx={{ mt: "2rem" }}
      >
        Create New Question
      </Button> */}
    </Box>
  )
}

export default QuestionList
