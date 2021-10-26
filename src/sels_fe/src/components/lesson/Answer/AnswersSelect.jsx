import React, { useEffect, useState } from "react"

import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material"

import CheckIcon from "@mui/icons-material/Check"
import LabelImportantIcon from "@mui/icons-material/LabelImportant"
import AnchorIcon from "@mui/icons-material/Anchor"

const AnswersSelect = ({ choices, answer, handleAnswered }) => {
  const [onSubmit, setOnSubmit] = useState(false)
  const [answered, setAnswered] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSetAnswer = (answered_id, selectedAnswer) => {
    const isCorrectAnswer = answered_id === answer?.choice
    setIsCorrect(isCorrectAnswer)
    setAnswered(answered_id)
    setOnSubmit(!onSubmit)
    handleAnswered(isCorrectAnswer, selectedAnswer, answer)
  }

  useEffect(() => {
    setOnSubmit(false)
  }, [choices])

  useEffect(() => {
    setIsCorrect(false)
  }, [answer])

  return (
    <List>
      {choices?.map((choice) => (
        <React.Fragment key={choice.id}>
          <Divider />
          <ListItem
            button
            onClick={
              !onSubmit ? (e) => handleSetAnswer(choice.id, choice, e) : null
            }
          >
            <ListItemIcon>
              {isCorrect & (answer?.choice === choice.id) ? (
                <CheckIcon color="success" />
              ) : answered === choice.id ? (
                <AnchorIcon color="error" />
              ) : onSubmit & (answer?.choice === choice.id) ? (
                <LabelImportantIcon color="success" />
              ) : (
                <AnchorIcon />
              )}
            </ListItemIcon>
            <ListItemText
              primary={
                <Stack direction="row" sx={{ ml: "1rem" }}>
                  {isCorrect & (answer?.choice === choice.id) ? (
                    <Typography component="div" sx={{ color: "green" }}>
                      {choice.value}
                    </Typography>
                  ) : answered === choice.id ? (
                    <Typography component="div" sx={{ color: "red" }}>
                      {choice.value}
                    </Typography>
                  ) : onSubmit & (answer?.choice === choice.id) ? (
                    <Typography component="div" sx={{ color: "green" }}>
                      {choice.value}
                    </Typography>
                  ) : (
                    <Typography component="div" sx={{ color: "black" }}>
                      {choice.value}
                    </Typography>
                  )}
                </Stack>
              }
            />
          </ListItem>
          <Divider />
          <br />
        </React.Fragment>
      ))}
    </List>
  )
}

export default AnswersSelect
