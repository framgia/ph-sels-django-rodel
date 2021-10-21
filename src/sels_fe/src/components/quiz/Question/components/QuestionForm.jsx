import React from "react"

import { OutlinedInput, TextField } from "@material-ui/core"

import { CustomFormControl } from "./CustomFormControl"
import { CustomInputLabel } from "./CustomInputLabel"
import { Stack } from "@mui/material"

const QuestionForm = ({ question, onChange, error, index }) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{ justifyContent: "center", width: "100%" }}
    >
      <CustomFormControl>
        <CustomInputLabel
          labelFor={`question-question-${index}`}
          label="Question"
        />
        <OutlinedInput
          required
          id={`question-question-${index}`}
          type="text"
          name="question"
          label="Question"
          value={question.question || ""}
          onChange={(e) => onChange(index, e)}
          sx={{ width: "50ch" }}
        />
      </CustomFormControl>
      <CustomFormControl>
        <TextField
          id={`question-description-${index}`}
          type="text"
          name="description"
          label="Description"
          multiline
          maxRows={4}
          variant="outlined"
          value={question.description || ""}
          onChange={(e) => onChange(index, e)}
          sx={{ width: "50ch" }}
        />
      </CustomFormControl>
    </Stack>
  )
}

export default QuestionForm
