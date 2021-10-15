import React from "react"

import {
  Typography,
  Box,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@material-ui/core"

const ChoiceForm = ({ question, choices, onChange, index }) => {
  const n_choices = Array.from(Array(4).keys())
  console.log(question, choices, onChange, index)

  choices.map((choice, index) => console.log(choice))
  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "60%" }}>
      <Typography>Question: {question.question}</Typography>

      <FormControl fullWidth>
        <InputLabel shrink htmlFor="select-choices">
          Choices
        </InputLabel>
        <Select
          labelId={`select-choice-${index}-1`}
          id="select-choices"
          value={question}
          label="Choice-1"
          onChange={(e) => onChange(index, e)}
        >
          {
            // n_choices.forEach(n=>{
            choices.map((choice, index) => (
              <MenuItem value={choice.value}>{choice.value}</MenuItem>
            ))
            // })
          }
        </Select>
      </FormControl>
    </Box>
  )
}

export default ChoiceForm
