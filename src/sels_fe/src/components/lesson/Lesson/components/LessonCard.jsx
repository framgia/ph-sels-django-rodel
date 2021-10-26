import React from "react"

import {
  Stack,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material"

const LessonCard = ({ quiz, isTaken, handleLesson }) => {
  return (
    <Card
      elevation={5}
      sx={{
        p: "0.5rem",
        maxWidth: 345,
        borderRadius: "0.825rem",
        bgcolor: "#edf9ffb0",
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image="static/images/q5.png"
        alt="quiz icon"
        sx={{
          bgcolor: "#f0f0f0ff",
          borderRadius: "0.75rem 0.75rem 0 0 ",
        }}
      />
      <CardContent
        sx={{
          bgcolor: "#f0f0f070",
        }}
      >
        <Typography gutterBottom variant="h5" color="primary" component="div">
          {quiz.name}
        </Typography>
        <Typography variant="subtitle2" color="inherit">
          {quiz.description}
        </Typography>
      </CardContent>
      <Stack direction="row" spacing="2rem" sx={{ justifyContent: "right" }}>
        <CardActions>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            onClick={(e) => handleLesson(quiz.id, e)}
          >
            {isTaken ? "View Results" : "Start Lesson"}
          </Button>
        </CardActions>
      </Stack>
    </Card>
  )
}

export default LessonCard
