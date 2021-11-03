import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"

import { postBulkQuestion, postQuiz, updateQuiz } from "../../../store/actions"

import {
  Stepper,
  StepButton,
  Step,
  Box,
  Button,
  Typography,
} from "@mui/material"

import QuizCreateSteps from "./QuizCreateSteps"

const steps = [
  "Add Quiz Details",
  "Add Questions",
  "Add Choices",
  "Select Answers",
]

function QuizWithQuestionsCreate() {
  const quiz_list = useSelector((state) => state.Quiz.quiz_list.results)
  const question_list = useSelector((state) => state.Question.question_list)
  const choices = useSelector((state) => state.Choice.choice_list)
  let errorQuiz = useSelector((state) => state.Quiz.error)

  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState([])
  const [currentQuiz, setCurrentQuiz] = useState({})
  const [currentQuestions, setCurrentQuestions] = useState([])
  const [update, setUpdate] = useState(false)

  const [quiz, setQuiz] = useState({ name: "", description: "" })
  const [questions, setQuestions] = useState([
    { question: "", description: "", quiz: [] },
  ])
  const [questionAnswer, setQuestionAnswer] = useState([
    { choice: 0, question: 0 },
  ])

  const dispatch = useDispatch()
  const history = useHistory()

  const handleQuizChange = (event) => {
    const { name, value } = event.target
    setQuiz({ ...quiz, [name]: value })
  }

  const handleQuestionsChange = (index, event) => {
    let questionsFormVal = [...questions]
    questionsFormVal[index][event.target.name] = event.target.value
    setQuestions(questionsFormVal)
  }

  let addQuestionsForm = () => {
    setQuestions([...questions, { question: "", description: "", quiz: [] }])
  }

  let removeQuestionsForm = (index) => {
    let questionsFormValue = [...questions]
    questionsFormValue.splice(index, 1)
    setQuestions(questionsFormValue)
  }

  let handleSetQuestionAnswer = (event) => {
    const { name, value } = event.target
    setQuestionAnswer({ ...questionAnswer, [name]: value })
  }

  const handleSubmit = () => {
    if (activeStep === 0) {
      completed[0] !== true
        ? dispatch(postQuiz(quiz))
        : dispatch(updateQuiz(currentQuiz?.id, quiz))
    }
    if (activeStep === 1) {
      questions.map((question) => (question["quiz"] = currentQuiz.id))
      completed[1] !== true && dispatch(postBulkQuestion(questions))
    }
    setUpdate(!update)
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
    setUpdate(!update)
  }

  const handleComplete = () => {
    handleSubmit()
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  useEffect(() => {
    setCurrentQuiz(quiz_list.filter((q) => q.name === quiz.name)[0])
  }, [quiz_list, quiz, update])

  useEffect(() => {
    setCurrentQuestions(
      question_list?.filter((quest) => quest.quiz === currentQuiz?.id)
    )
  }, [question_list, currentQuiz, update])

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleFinish = () => {
    setActiveStep(0)
    setCompleted([])
    setCurrentQuiz({})
    setCurrentQuestions({})
    history.push("/quiz")
  }

  useEffect(() => {
    window.onbeforeunload = confirmExit
    function confirmExit() {
      return 0
    }
  }, [])

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ m: "1rem", mx: "auto", width: "90%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              New Quiz has been Created.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button variant="outlined" onClick={handleFinish}>
                Go back to List
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <QuizCreateSteps
              activeStep={activeStep}
              quiz={quiz}
              handleQuizChange={handleQuizChange}
              errorQuiz={errorQuiz}
              questions={questions}
              handleQuestionsChange={handleQuestionsChange}
              removeQuestionsForm={removeQuestionsForm}
              completed={completed}
              addQuestionsForm={addQuestionsForm}
              currentQuestions={currentQuestions}
              choices={choices}
              handleSetQuestionAnswer={handleSetQuestionAnswer}
            />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                variant="contained"
                color="primary"
                disabled={completed[activeStep] !== true}
                onClick={handleNext}
                sx={{ mr: 1 }}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Saved
                  </Typography>
                ) : (
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Submit"}
                  </Button>
                ))}
            </Box>
          </>
        )}
      </div>
    </Box>
  )
}

export default QuizWithQuestionsCreate
