import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"

import {
  postQuestion,
  postQuiz,
  updateQuestion,
  updateQuiz,
} from "../../../store/actions"

import { Stepper, StepButton, Step, Box } from "@mui/material"
import { IconButton, Button, Typography } from "@material-ui/core"

import { Delete } from "@material-ui/icons"
import { Divider, Stack } from "@mui/material"

import QuizForm from "./components/QuizForm"
import QuestionsForm from "./../Question/components/QuestionForm"
import ChoiceForm from "./../Choice/components/ChoiceForm"
import AnswersSelect from "../Answer/components/AnswersSelect"

const steps = [
  "Add Quiz Details",
  "Add Questions",
  "Add Choices",
  "Select Answers",
]
let currentQuiz = null
let currentQuestions = null

function QuizWithQuestionsCreate() {
  const quizzes = useSelector((state) => state.Quiz.quiz_list)
  const question_list = useSelector((state) => state.Question.question_list)
  const choices = useSelector((state) => state.Choice.choice_list)
  let errorQuiz = useSelector((state) => state.Quiz.error)

  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState([])
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
        : dispatch(updateQuiz(currentQuiz[0]?.id, quiz))
    }
    if (activeStep === 1) {
      questions.map((question, index) => {
        const question_id = new Array()
        question_id.push(currentQuiz[0]?.id)
        question["quiz"] = question_id
        completed[1] !== true
          ? dispatch(postQuestion(question))
          : dispatch(updateQuestion(currentQuestions[index]?.id, question))
      })
    }
  }

  useEffect(() => {
    currentQuiz = quizzes.filter((q) => q.name === quiz.name)
    if (currentQuiz[0]?.id) handleComplete()
  }, [quizzes])

  useEffect(() => {
    currentQuestions = question_list.filter(
      (quest) => quest.quiz[0] === currentQuiz[0]?.id
    )
    if (currentQuestions?.id) handleComplete()
  }, [question_list, update])

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleComplete = () => {
    setUpdate(!update)
    handleSubmit()
    if (currentQuiz[0]?.id) {
      handleNext()
      const newCompleted = completed
      newCompleted[activeStep] = true
      setCompleted(newCompleted)
    }
  }

  const handleFinish = () => {
    setActiveStep(0)
    setCompleted([])
    history.push("/quiz")
    currentQuiz = null
    currentQuestions = null
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
    <Box sx={{ m: "auto", width: "90%" }}>
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
            {activeStep === 0 ? (
              <QuizForm
                quiz={quiz}
                onChange={handleQuizChange}
                error={errorQuiz}
              />
            ) : activeStep === 1 ? (
              <>
                {questions.map((question, index) => (
                  <React.Fragment key={index}>
                    <Box
                      component="form"
                      onSubmit={(e) => e.preventDefault()}
                      sx={{ m: "1rem", mx: "auto", maxWidth: "80%" }}
                    >
                      <Stack
                        direction="row"
                        spacing={4}
                        sx={{ justifyContent: "center" }}
                      >
                        <QuestionsForm
                          question={question}
                          onChange={handleQuestionsChange}
                          index={index}
                        />
                        <IconButton
                          color="secondary"
                          onClick={() => removeQuestionsForm(index)}
                        >
                          <Delete fontSize="medium" />
                        </IconButton>
                      </Stack>
                    </Box>
                    <Divider />
                  </React.Fragment>
                ))}
                <Button
                  variant="outlined"
                  disabled={completed[activeStep]}
                  onClick={addQuestionsForm}
                >
                  Add Question
                </Button>
              </>
            ) : activeStep === 2 ? (
              <>
                <Divider />
                <Box
                  component="div"
                  sx={{ m: "1rem", mx: "auto", maxWidth: "80%" }}
                >
                  <Stack direction="row" sx={{ justifyContent: "center" }}>
                    <ChoiceForm questions={currentQuestions} />
                  </Stack>
                </Box>
              </>
            ) : (
              activeStep === 3 && (
                <AnswersSelect
                  questions={currentQuestions}
                  choices={choices}
                  onChange={handleSetQuestionAnswer}
                />
              )
            )}
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