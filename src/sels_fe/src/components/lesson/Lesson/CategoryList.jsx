import React, { useEffect, useState } from "react"
// import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import { Box, Typography } from "@material-ui/core"

import Lessons from "./components/Lessons"

const CategoryList = ({ user }) => {
  const quiz_list = useSelector((state) => state.Quiz.quiz_list)
  const lesson_list = useSelector((state) => state.Lesson.lesson_list)
  const [takenLessons, setTakenLessons] = useState([])

  // const history = useHistory()

  useEffect(() => {
    setTakenLessons(
      lesson_list.filter((lesson) => lesson.taken_by === user?.id)
    )
  }, [lesson_list])

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "90%" }}>
      <Typography variant="h4" color="primary">
        Categories
      </Typography>
      <Lessons quizzes={quiz_list} taken_lessons={takenLessons} />
    </Box>
  )
}

export default CategoryList
