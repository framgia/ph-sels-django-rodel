import React from "react"

import { OutlinedInput, TextField } from "@material-ui/core"

import { CustomFormControl } from "./CustomFormControl"
import { CustomInputLabel } from "./CustomInputLabel"
import { CustomHelperText } from "./CustomHelperText"

const QuestionUpdateForm = ({ question, onChange, error }) => {
  return (
    <>
      <CustomFormControl>
        <CustomInputLabel labelFor="question-question" label="Question" />
        <OutlinedInput
          required
          id="question-question"
          type="text"
          name="name"
          label="Question"
          value={question.question}
          onChange={onChange}
          sx={{ width: "50ch" }}
        />
      </CustomFormControl>
      <CustomFormControl>
        <TextField
          id="question-name"
          type="text"
          name="description"
          label="Description"
          multiline
          maxRows={4}
          variant="outlined"
          defaultValue={question.description}
          value={question.description}
          onChange={onChange}
          sx={{ width: "50ch" }}
        />
      </CustomFormControl>
    </>
  )
}

export default QuestionUpdateForm
