import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams, useLocation } from "react-router-dom"
import { useRouteMatch } from "react-router"

import {
  postAnswer,
  postBulkChoice,
  updateAnswer,
} from "../../../store/actions"

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core"

import { Divider, Stack, Fab } from "@mui/material"
import { Delete, Edit } from "@material-ui/icons"
import LabelImportantIcon from "@mui/icons-material/LabelImportant"
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot"

import { QuestionUpdate } from "."
import { ChoiceCreate, ChoiceUpdate } from "../Choice/"

const testData = [
  { id: 93, value: "Choice 1", question: [80] },
  { id: 94, value: "Choice 2", question: [80] },
  { id: 95, value: "Choice 3", question: [80] },
  { id: 96, value: "All of the above", question: [80] },
]

const QuestionDetail = () => {
  const { question_list } = useSelector((state) => state.Question)
  const { choice_list } = useSelector((state) => state.Choice)
  const answer_list = useSelector((state) => state.Answer.answer_list)
  // const { question } = useLocation()
  const [update, setUpdate] = useState(false)
  const [updateChoices, setUpdateChoices] = useState(false)
  const [questionDetail, setQuestionDetail] = useState({})
  const [choices, setChoices] = useState([])
  const [answer, setAnswer] = useState({ choice: 0, question: 0 })
  const { id, question_id } = useParams()

  const history = useHistory()
  const dispatch = useDispatch()
  const { path, url } = useRouteMatch(0)

  const handleEditChoice = (choice_id, choice_value) => {
    // history.push({
    //   pathname: `/choice/${choice_id}/edit`,
    //   choice: { id: choice_id, value: choice_value },
    // })
  }
  const handleEditQuestion = () => {
    // history.push({
    //   pathname: `/choice/${choice_id}/edit`,
    //   choice: { id: choice_id, value: choice_value },
    // })
  }
  const handleDeleteQuestion = () => {
    // history.push({
    //   pathname: `/choice/${choice_id}/edit`,
    //   choice: { id: choice_id, value: choice_value },
    // })
  }

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
    setChoices(
      choice_list.filter(
        (choice) => choice.question[0] === parseInt(question_id)
      )
    )
    setAnswer(
      answer_list?.find((ans) => ans.question === parseInt(question_id))
    )
  }, [choice_list, question_id])

  useEffect(() => {
    setAnswer(
      answer_list?.find((ans) => ans.question === parseInt(question_id))
    )
  }, [answer_list, update])

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
