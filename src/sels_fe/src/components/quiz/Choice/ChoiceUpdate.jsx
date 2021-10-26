import React, { useState } from "react"
import { useParams } from "react-router-dom"

import { OutlinedInput, Button } from "@material-ui/core"

import { CustomFormControl } from "./components/CustomFormControl"
import { CustomInputLabel } from "./components/CustomInputLabel"
import { Box, Checkbox } from "@mui/material"
import { postBulkChoice } from "../../../store/actions"
import { useDispatch } from "react-redux"

const ChoiceUpdate = ({ onUpdate }) => {
  const { question_id } = useParams()
  const [choices, setChoices] = useState([
    { value: "", question: [] },
    { value: "", question: [] },
    { value: "", question: [] },
    { value: "", question: [] },
  ])
  const [disableSave, setDisableSave] = useState(false)
  const dispatch = useDispatch()

  const handleChoiceChange = (c_index, event) => {
    let choicesFormValue = [...choices]
    choicesFormValue[c_index][event.target.name] = event.target.value
    setChoices(choicesFormValue)
  }

  const handleSaveChoices = () => {
    setDisableSave(!disableSave)
    onUpdate()
    let q_id = []
    q_id.push(parseInt(question_id))
    choices.map((choice) => (choice["question"] = q_id))
    dispatch(postBulkChoice(choices))
  }

  return (
    <Box sx={{ m: "auto", width: "80%" }}>
      {choices?.map((choice, index) => (
        <React.Fragment key={index}>
          <CustomFormControl control={<Checkbox />}>
            <CustomInputLabel
              labelFor={`choice-name${index}`}
              label={`Choice-${index + 1}`}
            />
            <OutlinedInput
              id={`choice-name${index}`}
              type="text"
              name={`value`}
              label={`Choice-${index + 1}`}
              value={choice.value || ""}
              onChange={(e) => handleChoiceChange(index, e)}
              sx={{ width: "50ch" }}
            />
          </CustomFormControl>
        </React.Fragment>
      ))}
      <br />
      <Button
        color="primary"
        variant="contained"
        disabled={disableSave}
        onClick={handleSaveChoices}
      >
        Update Choices
      </Button>
    </Box>
  )
}

export default ChoiceUpdate
