import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { Typography, Box, Button } from "@material-ui/core"

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
  Divider,
} from "@mui/material"
import { postAnswer } from "../../../../store/actions"

let initialAnswers = []

const AnswersSelect = ({ questions, choices }) => {
  const [answers, setAnswers] = useState(initialAnswers)
  const [onSubmit, setOnSubmit] = useState(false)
  const dispatch = useDispatch()

  const handleAnswersChange = (index, question_id, event) => {
    const { name, value } = event.target
    let AnswerValue = [...answers]
    AnswerValue[index]["choice"] = parseInt(value)
    AnswerValue[index]["question"] = question_id
    setAnswers(AnswerValue)
  }

  const handleSubmit = () => {
    answers.map((answer) => dispatch(postAnswer(answer)))
    setOnSubmit(!onSubmit)
  }
  useEffect(() => {
    for (const key in questions) {
      initialAnswers.push({ choice: 0, question: 0 })
    }
    console.log(answers)
  }, [])

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "60%" }}>
      {questions?.map((question, index) => (
        <React.Fragment key={index}>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend"></FormLabel>
            <Typography variant="h6" align="left">
              {`Question ${index + 1}: `}
              {question.question}
            </Typography>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => handleAnswersChange(index, question.id, e)}
            >
              <Stack spacing={2}>
                {choices
                  .filter((choice) => choice.question[0] === question.id)
                  .map((opt, index) => (
                    <FormControlLabel
                      value={opt.id}
                      control={<Radio />}
                      label={opt.value}
                      labelPlacement="bottom"
                    />
                  ))}
              </Stack>
              <Divider />
              <br />
            </RadioGroup>
          </FormControl>
        </React.Fragment>
      ))}
      <Button
        color="primary"
        disabled={onSubmit}
        variant="contained"
        onClick={handleSubmit}
      >
        Save Answers
      </Button>
    </Box>
  )
}

export default AnswersSelect

// .filter((choice) => choice.question === question.id)
// <React.Fragment key={index}>
// </React.Fragment>
