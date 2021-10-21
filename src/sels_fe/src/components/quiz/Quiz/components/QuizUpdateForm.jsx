import React from "react"

import { OutlinedInput, TextField } from "@material-ui/core"

import { CustomFormControl } from "./CustomFormControl"
import { CustomInputLabel } from "./CustomInputLabel"
import { CustomHelperText } from "./CustomHelperText"

const QuizUpdateForm = ({ quiz, onChange, error }) => {
  return (
    <>
      <CustomFormControl>
        <CustomInputLabel labelFor="quiz-name" label="Quiz Name" />
        <OutlinedInput
          required
          id="quiz-name"
          type="text"
          name="name"
          label="Quiz Name"
          defaultValue={quiz.name}
          value={quiz.name}
          onChange={onChange}
          sx={{ width: "50ch" }}
        />
        <CustomHelperText
          error={error?.name?.[0] || error?.non_field_errors?.[0]}
        />
      </CustomFormControl>
      <CustomFormControl>
        <TextField
          id="quiz-name"
          type="text"
          name="description"
          label="Description"
          multiline
          maxRows={4}
          variant="outlined"
          defaultValue={quiz.description}
          value={quiz.description}
          onChange={onChange}
          sx={{ width: "50ch" }}
        />
      </CustomFormControl>
    </>
  )
}

export default QuizUpdateForm
