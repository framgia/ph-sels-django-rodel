import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { postAnswer, updateAnswer } from "../../../store/actions"

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
} from "@material-ui/core"

import { Divider } from "@mui/material"
import LabelImportantIcon from "@mui/icons-material/LabelImportant"
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot"

import { ChoiceCreate } from "../Choice/"

const QuestionDetail = () => {
  const { question_list } = useSelector((state) => state.Question)
  const { choice_list } = useSelector((state) => state.Choice)
  const answer_list = useSelector((state) => state.Answer.answer_list)
  const [update, setUpdate] = useState(false)
  const [questionDetail, setQuestionDetail] = useState({})
  const [choices, setChoices] = useState([])
  const [answer, setAnswer] = useState({ choice: 0, question: 0 })
  const { question_id } = useParams()

  const dispatch = useDispatch()

  const handleSetAnswer = (choice_id) => {
    setAnswer({ choice: choice_id, question: parseInt(question_id) })
    handleSaveAnswer(choice_id)
  }

  const handleSaveAnswer = (choice_id) => {
    answer === undefined
      ? dispatch(
          postAnswer({
            choice: choice_id,
            question: parseInt(question_id),
          })
        )
      : dispatch(
          updateAnswer(answer?.id, {
            choice: choice_id,
            question: parseInt(question_id),
          })
        )
    setUpdate(!update)
  }

  useEffect(() => {
    setQuestionDetail(
      question_list?.find((question) => question.id === parseInt(question_id))
    )
  }, [question_list, question_id])

  useEffect(() => {
    setChoices(
      choice_list.filter(
        (choice) => choice.question[0] === parseInt(question_id)
      )
    )
  }, [choice_list, question_id])

  useEffect(() => {
    setAnswer(
      answer_list?.find((ans) => ans.question === parseInt(question_id))
    )
  }, [answer_list, question_id])

  return (
    <Box component="div" sx={{ maxWidth: "90%", mx: "auto" }}>
      <br />
      <Typography variant="h5" color="primary">
        {questionDetail?.question}
      </Typography>
      <Typography variant="subtitle1">{questionDetail?.description}</Typography>
      <br />
      <List>
        {choices.length > 0 ? (
          choices.map((choice) => (
            <React.Fragment key={choice.id}>
              <Divider />
              <ListItem button onClick={(e) => handleSetAnswer(choice.id, e)}>
                <ListItemIcon>
                  {answer?.choice === choice.id ? (
                    <LabelImportantIcon fontSize="large" />
                  ) : (
                    <TurnedInNotIcon fontSize="large" />
                  )}
                </ListItemIcon>
                <ListItemText primary={choice.value} />
                <ListItemSecondaryAction></ListItemSecondaryAction>
              </ListItem>
            </React.Fragment>
          ))
        ) : (
          <ChoiceCreate />
        )}
      </List>
    </Box>
  )
}

export default QuestionDetail
