import { Box, Stack, Typography, Button } from "@mui/material"

import Question from "../../Question/Question"

const LessonStart = ({
  activeStep,
  isAnswered,
  correctAnswersCount,
  questions,
  handleSubmit,
  handleAnswered,
}) => {
  return (
    <>
      <Stack
        direction='row'
        spacing={2}
        sx={{
          ml: "10%",
          mr: "auto",
          minWidth: "8rem",
          justifySelf: "left",
        }}
      >
        <Typography variant='subtitle1'>Score:</Typography>
        <Typography variant='body1' color='green'>
          {correctAnswersCount}/{questions.length}
        </Typography>
      </Stack>
      <Question
        question={questions[activeStep]}
        handleAnswered={handleAnswered}
      />
      <br />
      <Stack direction='row' sx={{ mx: "auto", width: "85%" }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          color='primary'
          variant='contained'
          disabled={!isAnswered}
          onClick={handleSubmit}
        >
          {activeStep === questions.length - 1 ? "Finish" : "Next"}
        </Button>
      </Stack>
    </>
  )
}

export default LessonStart
