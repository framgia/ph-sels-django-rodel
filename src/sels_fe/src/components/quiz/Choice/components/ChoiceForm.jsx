import React, { useState } from "react"

import { OutlinedInput, Typography, Button } from "@material-ui/core"

import { CustomFormControl } from "./CustomFormControl"
import { CustomInputLabel } from "./CustomInputLabel"
import { Box, Checkbox, Stack, Stepper, Step, StepLabel } from "@mui/material"
import { postChoice } from "../../../../store/actions"
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
    setChoices(choicesFormValue)
  }

  const handleNext = () => {
    handleSaveChoices(questions[activeStep].id)
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleSaveChoices = (id) => {
    choices.map((choice, index) => {
      const question_id = new Array()
      question_id.push(id)
      choice["question"] = question_id
      dispatch(postChoice(choice))
    })
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box sx={{ width: "80%" }}>
      <Stepper activeStep={activeStep}>
        {questions.map((question, index) => (
          <Step key={question.id}>
            <StepLabel>{question.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === questions.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Questions now have choice.
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Question {activeStep + 1}
          </Typography>
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
