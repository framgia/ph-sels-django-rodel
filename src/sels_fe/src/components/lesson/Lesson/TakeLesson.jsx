import React, { Fragment, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"

import {} from "../../../store/actions"

import { Box, LinearProgress, Typography } from "@mui/material"
import LessonStart from "./components/LessonStart"
import LessonAlreadyTaken from "./components/LessonAlreadyTaken"
import LessonResult from "./components/LessonResults"

function TakeLesson({ user }) {
  const { id } = useParams()
  const quiz_list = useSelector((state) => state.Quiz.quiz_list)
  const question_list = useSelector((state) => state.Question.question_list)
  const lesson_list = useSelector((state) => state.Lesson.lesson_list)
  const [currentQuiz, setCurrentQuiz] = useState({})
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [takenLessons, setTakenLessons] = useState([])
  const [isLessonTaken, setIsLessonTaken] = useState(false)

  // const [update, setUpdate] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [isAnswered, setIsAnswered] = useState(false)

  // const [lesson, setLesson] = useState({ quiz: 0, taken_by: 0})
  const [results, setResults] = useState([])
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
  const [answered, setAnswered] = useState({
    lesson: 0,
    question: 0,
    answer: 0,
  })

  // const dispatch = useDispatch()
  // const history = useHistory()

  const handleSubmit = () => {
    handleNext()
  }

  const handleSkipQuestion = () => {
    handleNext()
  }

  const handleAnswered = (isAnswerCorrect, answered) => {
    setAnswers([...answers, answered])
    setIsAnswered(!isAnswered)
    setResults([...results, isAnswerCorrect])
    isAnswerCorrect && setCorrectAnswersCount(correctAnswersCount + 1)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setIsAnswered(false)
  }

  useEffect(() => {
    setTakenLessons(
      lesson_list.filter((lesson) => lesson.taken_by === user?.id)
    )
  }, [lesson_list, user])

  useEffect(() => {
    setCurrentQuiz(quiz_list.find((quiz) => quiz.id === parseInt(id)))
  }, [quiz_list, id])

  useEffect(() => {
    setQuestions(question_list.filter((quest) => quest.quiz === parseInt(id)))
  }, [question_list, id])

  useEffect(() => {
    setAnswered({ ...answered, question: questions[activeStep]?.id })
  }, [questions, isAnswered, activeStep])

  useEffect(() => {
    takenLessons.length > 0 &&
      setIsLessonTaken(
        takenLessons.some((lesson) => lesson.quiz === parseInt(id))
      )
  }, [takenLessons, id])

  useEffect(() => {
    console.log(results)
  }, [results])

  useEffect(() => {
    setActiveStep(0)
  }, [id])

  return (
    <Box sx={{ m: "auto", width: "90%" }}>
      <br />
      <Typography variant="h5" color="primary">
        {currentQuiz?.name}
      </Typography>
      <br />
      <LinearProgress
        variant="determinate"
        value={(activeStep * 100) / questions.length}
      />
      <br />
      {activeStep === questions.length ? (
        <LessonResult
          correctAnswersCount={correctAnswersCount}
          results={results}
          answers={answers}
          questions={questions}
        />
      ) : (
        <Fragment>
          {!isLessonTaken ? (
            <LessonStart
              activeStep={activeStep}
              isAnswered={isAnswered}
              correctAnswersCount={correctAnswersCount}
              questions={questions}
              handleSubmit={handleSubmit}
              handleSkipQuestion={handleSkipQuestion}
              handleAnswered={handleAnswered}
            />
          ) : (
            <LessonAlreadyTaken />
          )}
        </Fragment>
      )}
    </Box>
  )
}

export default TakeLesson
