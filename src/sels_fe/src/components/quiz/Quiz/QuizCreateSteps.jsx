import { Box, Divider, Stack } from "@mui/material"

import QuizForm from "./components/QuizForm"
import BulkQuestionCreate from "./../Question/BulkQuestionCreate"
import ChoiceForm from "./../Choice/components/ChoiceForm"
import AnswersSelect from "../Answer/components/AnswersSelect"

function QuizCreateSteps({
  activeStep,
  quiz,
  handleQuizChange,
  errorQuiz,
  questions,
  React,
  handleQuestionsChange,
  removeQuestionsForm,
  completed,
  addQuestionsForm,
  currentQuestions,
  choices,
  handleSetQuestionAnswer,
}) {
  switch (activeStep) {
    case 0:
      return (
        <QuizForm quiz={quiz} onChange={handleQuizChange} error={errorQuiz} />
      )
    case 1:
      return (
        <BulkQuestionCreate
          activeStep={activeStep}
          questions={questions}
          React={React}
          handleQuestionsChange={handleQuestionsChange}
          removeQuestionsForm={removeQuestionsForm}
          completed={completed}
          addQuestionsForm={addQuestionsForm}
        />
      )
    case 2:
      return (
        <>
          <Divider />
          <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "80%" }}>
            <Stack direction="row" sx={{ justifyContent: "center" }}>
              <ChoiceForm questions={currentQuestions} />
            </Stack>
          </Box>
        </>
      )
    case 3:
      return (
        <AnswersSelect
          questions={currentQuestions}
          choices={choices}
          onChange={handleSetQuestionAnswer}
        />
      )

    default:
      break
  }
}

export default QuizCreateSteps
