import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {
  useHistory,
  useParams,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom"

import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core"

import { Divider, Stack, Pagination } from "@mui/material"
import { Delete, Edit } from "@material-ui/icons"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import {
  QuestionCreate,
  QuestionDetail,
  QuestionUpdate,
  QuestionDelete,
} from ".."

const QuizDetail = () => {
  const quizList = useSelector((state) => state.Quiz.quiz_list.resulta)
  const { question_list } = useSelector((state) => state.Question)
  const authUser = useSelector((state) => state.AuthUser.data)

  const [update, setUpdate] = useState(false)
  const [quizDetail, setQuizDetail] = useState({})
  const [questions, setQuestions] = useState([])
  const pageLimit = 5
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)
  const [pageQuestions, setPageQuestions] = useState([])

  const { id, question_id } = useParams()
  const { path } = useRouteMatch()
  const history = useHistory()

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const handleEditQuestion = (question_id) => {
    history.push(`/quiz/${id}/question/${question_id}/edit`)
  }

  const handleDeleteQuestion = (question_id) => {
    history.push(`/quiz/${id}/question/${question_id}/delete`)
  }

  const handleViewQuestion = (question_id) => {
    history.push(`/quiz/${id}/question/${question_id}`)
  }

  const handleAddQuestion = () => {
    history.push(`/quiz/${id}/question/create`)
  }

  useEffect(() => {
    const startIndex = page * pageLimit - pageLimit
    const endIndex = startIndex + pageLimit
    let nPages = questions.length / pageLimit

    setQuizDetail(quizList?.find((quiz) => quiz.id === parseInt(id)))
    setQuestions(
      question_list?.filter((question) => question.quiz === parseInt(id))
    )
    setPageQuestions(questions.slice(startIndex, endIndex))
    setPageCount(Math.ceil(nPages))
  }, [quizList, question_list, page, pageCount, questions.length, id, update])

  useEffect(() => {
    setUpdate(!update)
  }, [question_id, quizList, pageCount, question_list])

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "95%" }}>
      <Typography variant="h4" color="primary">
        {quizDetail?.name}
      </Typography>
      <Typography variant="subtitle2">{quizDetail?.description}</Typography>
      <br />
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <List>
            {pageQuestions.length > 0
              ? pageQuestions.map((question) => (
                  <React.Fragment key={question.id}>
                    <ListItem
                      button
                      onClick={() =>
                        handleViewQuestion(question.id, question.question)
                      }
                    >
                      <ListItemIcon>
                        <QuestionAnswerIcon fontSize="large" />
                      </ListItemIcon>
                      <ListItemText
                        primary={question.question}
                        // secondary={question.description}
                      />
                      <ListItemSecondaryAction>
                        {authUser?.is_admin ? (
                          <Stack
                            direction="row"
                            spacing="0.5rem"
                            sx={{ justifyContent: "center" }}
                          >
                            <IconButton
                              onClick={() =>
                                handleEditQuestion(
                                  question.id,
                                  question.question
                                )
                              }
                            >
                              <Edit fontSize="medium" />
                            </IconButton>
                            <IconButton
                              color="secondary"
                              onClick={() =>
                                handleDeleteQuestion(question.id, question.name)
                              }
                            >
                              <Delete fontSize="medium" />
                            </IconButton>
                          </Stack>
                        ) : null}
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))
              : null}
          </List>
          <Stack
            spacing={4}
            sx={{ maxWidth: "100%", justifyContent: "center" }}
          >
            <Pagination
              count={pageCount}
              variant="outlined"
              color="primary"
              shape="circular"
              page={page}
              onChange={handlePageChange}
              sx={{ alignSelf: "center" }}
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleAddQuestion()}
            >
              Add Question
            </Button>
            <Stack
              direction="row"
              spacing="3rem"
              sx={{ m: "3rem", justifyContent: "left" }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("/quiz")}
              >
                Back
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={5} md={5}>
          <Switch>
            <Route path={`${path}/question/create`}>
              <QuestionCreate />
            </Route>
            <Route path={`${path}/question/:question_id/edit`}>
              <QuestionUpdate />
            </Route>
            <Route path={`${path}/question/:question_id/delete`}>
              <QuestionDelete />
            </Route>
            <Route path={`${path}/question/:question_id`}>
              <QuestionDetail />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Box>
  )
}

export default QuizDetail
