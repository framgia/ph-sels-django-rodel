import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import LessonSavedResults from "./components/LessonSavedResults"

const ActivityDetail = ({ authUser }) => {
  const { id } = useParams()
  const activityList = useSelector((state) => state.Activity.activity_list)
  const questionList = useSelector((state) => state.Question.question_list)
  const [currentActivity, setcurrentActivity] = useState({})
  const [currentQuestions, setcurrentQuestions] = useState({})

  useEffect(() => {
    setcurrentActivity(
      activityList.find((activity) => activity.id === parseInt(id))
    )
  }, [activityList, id])

  useEffect(() => {
    let questions = []
    questions =
      questionList.length > 0 &&
      questionList?.filter(
        (question) =>
          question?.quiz === currentActivity?.started_lesson?.quiz.id
      )

    setcurrentQuestions(questions)
  }, [questionList, currentActivity])

  useEffect(() => {
    console.log(currentActivity?.user)
  }, [currentActivity])

  return (
    <Box sx={{ justifyContent: "center" }}>
      <br />
      {currentActivity?.activity_type === "Lesson" ? (
        <LessonSavedResults
          user={currentActivity?.user || currentActivity?.followed}
          lesson={currentActivity?.started_lesson}
          questions={currentQuestions}
        />
      ) : null}
    </Box>
  )
}

export default ActivityDetail
