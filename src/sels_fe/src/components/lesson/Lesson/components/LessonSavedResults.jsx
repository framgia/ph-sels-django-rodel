import React, { Fragment, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
  Collapse,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import StarHalfIcon from "@mui/icons-material/StarHalf"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import LessonSavedDetailedResult from "./LessonSavedDetailedResult"

const LessonSavedResults = ({ lesson, questions }) => {
  const answeredList = useSelector((state) => state.Answered.answered_list)
  const answerList = useSelector((state) => state.Answer.answer_list)
  const choiceList = useSelector((state) => state.Choice.choice_list)
  const [answers, setAnswers] = useState([])
  const [answeredQuestions, setAnsweredQuestions] = useState([]) //answer serlected from choice by user

  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
  const [results, setResults] = useState([]) //array true/false; compare answeredQuestions from answers

  const [percentage, setPercentage] = useState(75)
  const message = getResultMessage(percentage)
  const stars = getResultStars(percentage)
  const [viewResults, setViewResults] = useState(false)

  const history = useHistory()

  useEffect(() => {
    const scorePercentage = (correctAnswersCount * 100) / questions.length
    setPercentage(scorePercentage)
  }, [correctAnswersCount, questions])

  useEffect(() => {
    const newAnswer = []
    answerList.length > 0 &&
      answerList.map((ans) =>
        questions?.map(
          (quest) => ans.question === quest.id && newAnswer.push(ans)
        )
      )
    setAnswers(newAnswer)
  }, [answerList, questions])

  useEffect(() => {
    const newAnswered = []
    answeredList.length > 0 &&
      questions?.map((quest) =>
        answeredList.map(
          (answered) =>
            (answered.question === quest.id) &
              (answered.lesson === lesson.id) && newAnswered.push(answered)
        )
      )
    setAnsweredQuestions(newAnswered)
  }, [answeredList, questions, lesson])

  useEffect(() => {
    let newResults = []
    answers.forEach((answer, index) => {
      newResults.push(
        answeredQuestions.some((answered) => answer.choice === answered.answer)
      )
    })
    const count = newResults.filter((correct) => correct).length
    setResults(newResults)
    setCorrectAnswersCount(count)
  }, [answers, answeredQuestions])

  return (
    <Box component="div" sx={{ mb: "2rem" }}>
      <Stack direction="row" spacing="2rem" sx={{ justifyContent: "center" }}>
        <Card
          elevation={4}
          sx={{
            mb: "2rem",
            p: "0.5rem",
            minWidth: 320,
            maxWidth: 400,
            bgcolor: "#d3d3d3ff",
          }}
        >
          <CardContent
            sx={{
              bgcolor: "#ffffffe0",
              borderRadius: "0.75rem",
              borderStyle: "inset",
            }}
          >
            {stars}
            <Typography variant="h5">You scored:</Typography>
            <Typography variant="h6" color="green">
              {parseInt(percentage)}%
            </Typography>
            <br />
            <Typography variant="h6" color="#145e05">
              <FormatQuoteIcon style={{ fill: "#73047d" }} />
              {message}
              <FormatQuoteIcon style={{ fill: "#73047d" }} />
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Button
        variant="outlined"
        onClick={() => setViewResults(!viewResults)}
        endIcon={<ExpandMoreIcon />}
        style={{ color: "#73047d" }}
      >
        Review Results
      </Button>
      <Collapse in={viewResults}>
        <br />
        <LessonSavedDetailedResult
          questions={questions}
          answers={answers}
          choices={choiceList}
          answeredQuestions={answeredQuestions}
          results={results}
        />
      </Collapse>
      <br />
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.push(`/lesson`)}
      >
        Go to Categories
      </Button>
    </Box>
  )
}

const getResultStars = (percentage) => {
  let n_stars = parseFloat((percentage - 50) / 10)
  let _stars = []

  if (percentage >= 50) {
    for (let i = 0; i < Math.floor(n_stars); i++) {
      _stars.push(
        <StarIcon key={i} fontSize="medium" sx={{ fill: "#f7eb0a" }} />
      )
    }
    n_stars - Math.floor(n_stars) !== 0 &&
      _stars.push(
        <StarHalfIcon
          key={_stars.length}
          fontSize="medium"
          sx={{ fill: "#e8ce05" }}
        />
      )

    for (let i = 0; i < 5 - Math.ceil(n_stars); i++) {
      _stars.push(
        <StarBorderIcon
          key={_stars.length + i}
          fontSize="medium"
          sx={{ fill: "#ccb504" }}
        />
      )
    }
  } else {
    for (let i = 0; i < 5; i++) {
      _stars.push(
        <StarBorderIcon key={i} fontSize="medium" sx={{ fill: "#7d2604" }} />
      )
    }
  }
  return <Fragment>{_stars}</Fragment>
}

const getResultMessage = (percentage) => {
  let msg = ""
  msg =
    percentage === 100
      ? `Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.`
      : percentage >= 90
      ? `Winners are not afraid of losing. But losers are.`
      : percentage >= 70
      ? `The phoenix must burn to emerge.`
      : percentage >= 50
      ? `Failure isn't fatal, but failure to change might.`
      : `Giving up is the only sure way to fail.`
  return msg
}

export default LessonSavedResults
