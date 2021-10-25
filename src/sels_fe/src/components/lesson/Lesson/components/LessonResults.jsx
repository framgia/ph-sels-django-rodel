import React, { Fragment, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
  Collapse,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import StarHalfIcon from "@mui/icons-material/StarHalf"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import LessonDetailedResult from "./LessonDetailedResult"

const LessonResult = ({ correctAnswersCount, answers, questions, results }) => {
  const [percentage, setPercentage] = useState(0)
  const [message, setMessage] = useState("")
  const [viewResults, setViewResults] = useState(false)
  const [stars, setStars] = useState("")

  const history = useHistory()

  useEffect(() => {
    let n_stars = parseFloat((percentage - 50) / 10)
    let _stars = []
    if (percentage >= 50) {
      for (let i = 0; i < Math.floor(n_stars); i++) {
        _stars.push(<StarIcon fontSize="medium" style={{ fill: "#f7eb0a" }} />)
      }
      n_stars - Math.floor(n_stars) !== 0 &&
        _stars.push(
          <StarHalfIcon fontSize="medium" style={{ fill: "#e8ce05" }} />
        )

      for (let i = 0; i < 5 - Math.ceil(n_stars); i++) {
        _stars.push(
          <StarBorderIcon fontSize="medium" style={{ fill: "#ccb504" }} />
        )
      }
    } else {
      for (let i = 0; i < 5; i++) {
        _stars.push(
          <StarBorderIcon fontSize="medium" style={{ fill: "#7d2604" }} />
        )
      }
    }
    setStars(<Fragment>{_stars}</Fragment>)

    setMessage(
      percentage === 100
        ? `Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.`
        : percentage >= 90
        ? `Winners are not afraid of losing. But losers are.`
        : percentage >= 70
        ? `The phoenix must burn to emerge.`
        : percentage >= 50
        ? `Failure isn't fatal, but failure to change might.`
        : `Giving up is the only sure way to fail.`
    )
  }, [percentage])

  useEffect(() => {
    const scorePercentage = (correctAnswersCount * 100) / questions.length
    setPercentage(scorePercentage)
  }, [correctAnswersCount, questions])

  return (
    <Box component="div" sx={{ mb: "2rem" }}>
      <Stack direction="row" spacing="2rem" sx={{ justifyContent: "center" }}>
        <Card
          elevation={4}
          sx={{
            mb: "2rem",
            p: "0.5rem",
            minWidth: 320,
            maxWidth: 400,
            bgcolor: "#d3d3d3ff",
          }}
        >
          <CardContent
            sx={{
              bgcolor: "#ffffffe0",
              borderRadius: "0.75rem",
              borderStyle: "inset",
            }}
          >
            {stars}
            <Typography variant="h5">You scored:</Typography>
            <Typography variant="h6" color="green">
              {parseInt(percentage)}%
            </Typography>
            <br />
            <Typography variant="h6" color="#145e05">
              <FormatQuoteIcon style={{ fill: "#73047d" }} />
              {message}
              <FormatQuoteIcon style={{ fill: "#73047d" }} />
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Button
        variant="outlined"
        onClick={() => setViewResults(!viewResults)}
        endIcon={<ExpandMoreIcon />}
        style={{ color: "#73047d" }}
      >
        Review Results
      </Button>
      <Collapse in={viewResults}>
        <br />
        <LessonDetailedResult
          correctAnswersCount={correctAnswersCount}
          answers={answers}
          questions={questions}
          results={results}
        />
      </Collapse>
      <br />
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.push(`/lesson`)}
      >
        Go to Categories
      </Button>
    </Box>
  )
}

export default LessonResult
