import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import {} from "../../../store/actions"

import { Box } from "@mui/system"
import { Stack, Card, CardContent, Typography } from "@mui/material"
import { AnswersSelect } from "../Answer"

function Question({ question, handleAnswered }) {
  const choice_list = useSelector((state) => state.Choice.choice_list)
  const answer_list = useSelector((state) => state.Answer.answer_list)
  const [currentChoices, setCurrentChoices] = useState([])
  const [currentAnswer, setCurrentAnswer] = useState({})

  useEffect(() => {
    setCurrentChoices(
      choice_list.filter((choice) => choice.question[0] === question.id)
    )
  }, [choice_list, question])

  useEffect(() => {
    setCurrentAnswer(
      answer_list?.find((answer) => answer.question === question.id)
    )
  }, [answer_list, question])

  return (
    <Box component="div" sx={{ m: "auto", width: "90%", color: "success" }}>
      <Box
        component="div"
        sx={{
          p: "2rem 3.5rem",
          mx: "auto",
          maxWidth: "80%",
          bgcolor: "#f0f0f0",
        }}
      >
        <Stack direction="row" sx={{ mx: "auto", justifyContent: "center" }}>
          <Card
            sx={{
              width: "80%",
              bgcolor: "background.paper",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="primary"
                component="div"
              >
                {question.question}
              </Typography>
              <br />
              <AnswersSelect
                choices={currentChoices}
                answer={currentAnswer}
                handleAnswered={handleAnswered}
              />
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Box>
  )
}

export default Question
