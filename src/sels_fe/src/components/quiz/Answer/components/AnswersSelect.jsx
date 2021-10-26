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
import { postBulkAnswer } from "../../../../store/actions"

const AnswersSelect = ({ questions, choices }) => {
  const [answers, setAnswers] = useState([])
  const [onSubmit, setOnSubmit] = useState(false)
  const [update, setUpdate] = useState(false)
  const dispatch = useDispatch()

  const handleAnswersChange = (index, question_id, event) => {
    let AnswerValue = [...answers]
    AnswerValue[index]["choice"] = parseInt(event.target.value)
    AnswerValue[index]["question"] = question_id
    setAnswers(AnswerValue)
  }

  const handleSubmit = () => {
    dispatch(postBulkAnswer(answers))
    setOnSubmit(!onSubmit)
  }

  useEffect(() => {
    let initialAnswers = []
    questions.forEach(() => {
      initialAnswers.push({ choice: 0, question: 0 })
    })
    setAnswers(initialAnswers)
  }, [questions])

  useEffect(() => {
    setUpdate(!update)
  }, [answers])

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
                    <React.Fragment key={index}>
                      <FormControlLabel
                        value={opt.id}
                        control={<Radio />}
                        label={opt.value}
                        labelPlacement="bottom"
                      />
                    </React.Fragment>
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
