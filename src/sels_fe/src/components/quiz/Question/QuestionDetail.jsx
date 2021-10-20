import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams, useLocation } from "react-router-dom"

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

import { Divider, Stack } from "@mui/material"
import { Delete, Edit } from "@material-ui/icons"
import LabelImportantIcon from "@mui/icons-material/LabelImportant"
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot"
import { updateAnswer } from "../../../store/actions"

const QuestionDetail = () => {
  const { question_list } = useSelector((state) => state.Question)
  const { choice_list } = useSelector((state) => state.Choice)
  const answer_list = useSelector((state) => state.Answer.answer_list)
  const { question } = useLocation()
  const [update, setupdate] = useState(false)
  const [questionDetail, setQuestionDetail] = useState({})
  const [choices, setChoices] = useState([])
  const [answer, setAnswer] = useState({ choice: 0, question: 0 })
  const [answerID, setAnswerID] = useState(0)
  const { id } = useParams()
  console.log(answer_list)

  const history = useHistory()
  const dispatch = useDispatch(0)

  const handleEditChoice = (choice_id, choice_value) => {
    // history.push({
    //   pathname: `/choice/${choice_id}/edit`,
    //   choice: { id: choice_id, value: choice_value },
    // })
  }

  const handleSetAnswer = (choice_id, answer_id) => {
    setAnswer({ choice: choice_id, question: question.id })
    dispatch(
      updateAnswer(answerID, { choice: choice_id, question: question.id })
    )
  }

  useEffect(() => {
    setupdate(!update)
  }, [history])

  useEffect(() => {
    setQuestionDetail(
      question_list?.find((question) => question.id === parseInt(id))
    )
    setChoices(
      choice_list?.filter((choice) => choice.question[0] === questionDetail.id)
    )
    setAnswer(answer_list?.find((ans) => ans.question === question.id))
    setAnswerID(answer.id)
    console.log(answer)
  }, [question_list, choice_list])

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "60%" }}>
      <Typography variant="h5" color="primary">
        {questionDetail?.question}
      </Typography>
      <br />
      <Typography variant="h6">{questionDetail?.description}</Typography>
      <br />
      <List>
        {choices.length > 0
          ? choices.map((choice) => (
              <React.Fragment key={choice.id}>
                <Divider />
                <ListItem
                  button
                  onClick={(e) => handleSetAnswer(choice.id, answer.id, e)}
                >
                  <ListItemIcon>
                    {answer.choice === choice.id ? (
                      <LabelImportantIcon fontSize="large" />
                    ) : (
                      <TurnedInNotIcon fontSize="large" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={choice.value} />
                  <ListItemSecondaryAction>
                    <Stack
                      direction="row"
                      spacing="0.5rem"
                      sx={{ justifyContent: "center" }}
                    >
                      {/* <IconButton
                        onClick={() =>
                          handleEditChoice(choice.id, choice.value)
                        }
                      >
                        <Edit fontSize="medium" />
                      </IconButton> */}
                    </Stack>
                  </ListItemSecondaryAction>
                </ListItem>
              </React.Fragment>
            ))
          : null}
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push(`/quiz`)}
        sx={{ mt: "2rem" }}
      >
        Back
      </Button>
    </Box>
  )
}

export default QuestionDetail
