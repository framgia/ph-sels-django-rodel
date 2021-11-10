import React, { Fragment } from "react"
import { Box, IconButton, Button, Divider, Stack } from "@mui/material"
import { Delete } from "@material-ui/icons"

import QuestionsForm from "./components/QuestionForm"

const BulkQuestionCreate = ({
  activeStep,
  questions,
  React,
  handleQuestionsChange,
  removeQuestionsForm,
  completed,
  addQuestionsForm,
}) => {
  return (
    <>
      {questions.map((question, index) => (
        <Fragment key={index}>
          <Box
            component="form"
            onSubmit={(e) => e.preventDefault()}
            sx={{ m: "1rem", mx: "auto", maxWidth: "80%" }}
          >
            <Stack
              direction="row"
              spacing={4}
              sx={{ justifyContent: "center" }}
            >
              <QuestionsForm
                question={question}
                onChange={handleQuestionsChange}
                index={index}
              />
              <IconButton
                color="secondary"
                onClick={() => removeQuestionsForm(index)}
              >
                <Delete fontSize="medium" />
              </IconButton>
            </Stack>
          </Box>
          <Divider />
        </Fragment>
      ))}
      <Button
        variant="outlined"
        disabled={completed[activeStep]}
        onClick={addQuestionsForm}
      >
        Add Question
      </Button>
    </>
  )
}

export default BulkQuestionCreate
