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
  const quizList = useSelector((state) => state.Quiz.quiz_list.results)
  const questionList = useSelector((state) => state.Question.question_list)
  const lessonList = useSelector((state) => state.Lesson.lesson_list)
  const error = useSelector((state) => state.Lesson.error)
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
    setLesson(lessonList.find((lesson) => lesson.quiz === parseInt(id)))
  }, [lessonList, id])

  useEffect(() => {
    lesson?.id && error !== null
      ? setIsLessonTaken(true)
      : setIsLessonTaken(false)
  }, [lesson, error, id])

  useEffect(() => {
    setCurrentQuiz(quizList.find((quiz) => quiz.id === parseInt(id)))
  }, [quizList, id])

  useEffect(() => {
    setQuestions(questionList.filter((quest) => quest.quiz === parseInt(id)))
  }, [questionList, id])

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
      <br />
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
