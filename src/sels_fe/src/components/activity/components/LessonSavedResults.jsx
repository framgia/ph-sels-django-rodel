import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { Box, Typography } from "@mui/material"
import LessonSavedDetailedResult from "./LessonSavedDetailedResult"

const LessonSavedResults = ({ user, lesson, questions }) => {
  const answeredList = useSelector((state) => state.Answered.answered_list)
  const answerList = useSelector((state) => state.Answer.answer_list)
  const choiceList = useSelector((state) => state.Choice.choice_list)
  const [answers, setAnswers] = useState([])
  const [answeredQuestions, setAnsweredQuestions] = useState([])

  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
  const [results, setResults] = useState([])

  useEffect(() => {
    const newAnswer = []
    answerList.length > 0 &&
      answerList.map(
        (ans) =>
          questions.length > 0 &&
          questions?.map(
            (quest) => ans.question === quest.id && newAnswer.push(ans)
          )
      )
    setAnswers(newAnswer)
  }, [answerList, questions])

  useEffect(() => {
    let newAnswered = []
    if ((questions.length > 0) & (answeredList.length > 0)) {
      answeredList.map((answered) =>
        questions.map(
          (quest) =>
            (answered.question === quest.id) &
              (answered.lesson === lesson.id) && newAnswered.push(answered)
        )
      )
    }
    setAnsweredQuestions(newAnswered)
  }, [answeredList, questions, lesson])

  useEffect(() => {
    let newResults = []
    answers.forEach((answer) => {
      newResults.push(
        answeredQuestions.some((answered) => answer.choice === answered.answer)
      )
    })
    const count = newResults.filter((correct) => correct).length
    setResults(newResults)
    setCorrectAnswersCount(count)
  }, [answers, answeredQuestions])

  return (
    <Box component="div" sx={{ mb: "2rem", justifyContent: "center" }}>
      <Typography
        variant="h5"
        color="primary"
        sx={{ mt: "1rem", justifyContent: "right" }}
      >
        {lesson?.quiz.name}
      </Typography>
      <LessonSavedDetailedResult
        user={user}
        questions={questions}
        answers={answers}
        choices={choiceList}
        answeredQuestions={answeredQuestions}
        correctAnswersCount={correctAnswersCount}
        results={results}
      />
    </Box>
  )
}

export default LessonSavedResults
