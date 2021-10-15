import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"

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
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"

const QuizDetail = () => {
  const { quiz_list } = useSelector((state) => state.Quiz)
  const { question_list } = useSelector((state) => state.Question)
  const [update, setupdate] = useState(false)
  const [quizDetail, setQuizDetail] = useState({})
  const [questions, setQuestions] = useState([])
  const { id } = useParams()

  const history = useHistory()

  useEffect(() => {
    setupdate(!update)
  }, [history])

  useEffect(() => {
    setQuizDetail(quiz_list?.find((quiz) => quiz.id === parseInt(id)))
    setQuestions(
      question_list?.filter((question) => question.quiz[0] === quizDetail.id)
    )
  }, [quiz_list, question_list, update])
  console.log(questions)

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "60%" }}>
      <Typography variant="h5" color="primary">
        {quizDetail?.name}
      </Typography>
      <Typography variant="h6" color="secondary">
        {quizDetail?.description}
      </Typography>

      <List>
        {questions.length > 0
          ? questions.map((question) => (
              <React.Fragment key={question.id}>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <QuestionAnswerIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary={question.question} />
                  <ListItemSecondaryAction>
                    <Stack
                      direction="row"
                      spacing="0.5rem"
                      sx={{ justifyContent: "center" }}
                    >
                      <IconButton
                      // onClick={() =>
                      //   handleEditQuestion(question.id, question.question)
                      // }
                      >
                        <Edit fontSize="medium" />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        // onClick={() =>
                        //   handleDeleteQuestion(question.id, question.name)
                        // }
                      >
                        <Delete fontSize="medium" />
                      </IconButton>
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
        onClick={() => history.push("/quiz")}
        sx={{ mt: "2rem" }}
      >
        Back
      </Button>
    </Box>
  )
}

export default QuizDetail
