import React, { Fragment, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

import { postBulkAnswered, postLesson } from "../../../store/actions"

import { Box, LinearProgress, Typography } from "@mui/material"
import LessonStart from "./components/LessonStart"
import LessonResults from "./components/LessonResults"
import LessonSavedResults from "./components/LessonSavedResults"

function TakeLesson({ user }) {
  const { id } = useParams()
  const quiz_list = useSelector((state) => state.Quiz.quiz_list)
  const question_list = useSelector((state) => state.Question.question_list)
  const { lesson_list, error } = useSelector((state) => state.Lesson)
  const [currentQuiz, setCurrentQuiz] = useState({})
  const [questions, setQuestions] = useState([])
  const [answerChoices, setAnswerChoices] = useState([])
  const [activeStep, setActiveStep] = useState(0)

  const [lesson, setLesson] = useState({})
  const [isLessonTaken, setIsLessonTaken] = useState(false)

  const [isAnswered, setIsAnswered] = useState(false)
  const [results, setResults] = useState([])
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [answered, setAnswered] = useState({
    lesson: 0,
    question: 0,
    answer: 0,
  })

  const dispatch = useDispatch()

  const handleSubmit = () => {
    handleNext()
  }

  const handleAnswered = (isAnswerCorrect, answerSelected) => {
    setAnswerChoices([...answerChoices, answerSelected])
    setIsAnswered(!isAnswered)
    setResults([...results, isAnswerCorrect])
    setAnsweredQuestions([
      ...answeredQuestions,
      {
        lesson: lesson.id,
        question: questions[activeStep].id,
        answer: answerSelected.id,
      },
    ])
    isAnswerCorrect && setCorrectAnswersCount(correctAnswersCount + 1)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setIsAnswered(false)
  }

  useEffect(() => {
    dispatch(
      postLesson({
        quiz: parseInt(id),
        taken_by: user?.id,
      })
    )
  }, [dispatch, id, user])

  useEffect(() => {
    setLesson(lesson_list.find((lesson) => lesson.quiz === parseInt(id)))
  }, [lesson_list, id])

  useEffect(() => {
    lesson?.id && error !== null
      ? setIsLessonTaken(true)
      : setIsLessonTaken(false)
  }, [lesson, error, id])

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
    activeStep === questions.length &&
      dispatch(postBulkAnswered(answeredQuestions))
  }, [activeStep])

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
      {activeStep === questions.length ? (
        <LessonResults
          correctAnswersCount={correctAnswersCount}
          results={results}
          answers={answerChoices}
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
              handleAnswered={handleAnswered}
            />
          ) : (
            <LessonSavedResults lesson={lesson} questions={questions} />
          )}
        </Fragment>
      )}
    </Box>
  )
}

export default TakeLesson
