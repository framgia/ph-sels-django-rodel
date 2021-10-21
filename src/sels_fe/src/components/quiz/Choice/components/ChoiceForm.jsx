import React, { useState } from "react"

import { OutlinedInput, Typography, Button } from "@material-ui/core"

import { CustomFormControl } from "./CustomFormControl"
import { CustomInputLabel } from "./CustomInputLabel"
import { Box, Checkbox, Stack, Stepper, Step, StepLabel } from "@mui/material"
import { postBulkChoice } from "../../../../store/actions"
import { useDispatch } from "react-redux"

const ChoiceForm = ({ questions }) => {
  const [activeStep, setActiveStep] = React.useState(0)

  const [choices, setChoices] = useState([
    { value: "", question: [] },
    { value: "", question: [] },
    { value: "", question: [] },
    { value: "", question: [] },
  ])
  const dispatch = useDispatch()

  const handleChoiceChange = (q_index, c_index, event) => {
    let choicesFormValue = [...choices]
    choicesFormValue[c_index][event.target.name] = event.target.value
    // choicesFormValue[c_index]["question"] = [questions[activeStep].id]
    setChoices(choicesFormValue)
  }

  const handleNext = () => {
    handleSaveChoices(questions[activeStep].id)
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleSaveChoices = (id) => {
    console.log(choices)
    console.log(questions[activeStep].id)
    let question_id = new Array()
    question_id.push(questions[activeStep].id)
    choices.map((choice) => (choice["question"] = question_id))
    dispatch(postBulkChoice(choices))
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box sx={{ m: "1rem", width: "80%" }}>
      <Stepper activeStep={activeStep}>
        {questions.map((question, index) => (
          <Step key={question.id}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <br />
      {activeStep === questions.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Questions now have choice.
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {questions.map(
            (question, index) =>
              activeStep === index && (
                <Typography sx={{ mt: 2, mb: 1 }}>
                  {activeStep + 1}. {question.question}
                </Typography>
              )
          )}
          {choices?.map((choice, i) => (
            <React.Fragment key={`${activeStep}-${i}`}>
              <CustomFormControl control={<Checkbox />}>
                <CustomInputLabel
                  labelFor={`choice-name${activeStep}-${i}`}
                  label={`Choice-${i + 1}`}
                />
                <OutlinedInput
                  id={`choice-name${activeStep}-${i}`}
                  type="text"
                  name={`value`}
                  label={`Choice-${i + 1}`}
                  value={choice.value || ""}
                  onChange={(e) => handleChoiceChange(activeStep, i, e)}
                  sx={{ width: "50ch" }}
                />
              </CustomFormControl>
            </React.Fragment>
          ))}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button color="primary" variant="contained" onClick={handleNext}>
              {activeStep === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default ChoiceForm
