import React from "react"

import { Box, OutlinedInput, TextField } from "@material-ui/core"
import { CustomFormControl } from "./CustomFormControl"
import { CustomInputLabel } from "./CustomInputLabel"
import { CustomHelperText } from "./CustomHelperText"

const QuizForm = ({ quiz, onChange, error, index }) => {
  return (
    <Box
      key={index}
      component="form"
      type="submit"
      noValidate
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
      sx={{ m: "1rem", mx: "auto", maxWidth: "60%" }}
    >
      <CustomFormControl>
        <CustomInputLabel labelFor="quiz-name" label="Quiz Name" />
        <OutlinedInput
          required
          id="quiz-name"
          type="text"
          name="name"
          label="Quiz Name"
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
          value={quiz.description}
          onChange={onChange}
          sx={{ width: "50ch" }}
        />
      </CustomFormControl>
    </Box>
  )
}

export default QuizForm
