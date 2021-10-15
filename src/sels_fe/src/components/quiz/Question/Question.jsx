import React, { useState, useEffect } from "react"
// import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom';

// import { authSignin } from '../../../store/actions'

import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"

import QuestionForm from "./components/QuestionForm"

const Question = () => {
  const [onSubmit, setOnSubmit] = useState(false)
  // const dispatch = useDispatch()
  // const history = useHistory()

  return (
    <Box
      component="form"
      type="submit"
      sx={{ m: "1rem", mx: "auto", maxWidth: "70%" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Typography variant="h4" color="primary">
        Questions
      </Typography>
      <QuestionForm />
      <br />
      <Button
        sx={{ mx: "auto", mb: 1, width: "50ch", borderRadius: "5px" }}
        type="secondary"
        color="primary"
        // disabled = {onSubmit}
        variant="contained"
        // onClick={handleSubmit}
      >
        {onSubmit ? "SIGNING IN" : "SIGN IN"}
      </Button>
    </Box>
  )
}

export default Question
