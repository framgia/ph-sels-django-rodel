import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { Box, Typography } from "@material-ui/core"

import Lessons from "./components/Lessons"

const CategoryList = ({ user }) => {
  const quiz_list = useSelector((state) => state.Quiz.quiz_list)
  const lesson_list = useSelector((state) => state.Lesson.lesson_list)
  const authUser = useSelector((state) => state.AuthUser.data)
  const [takenLessons, setTakenLessons] = useState([])

  useEffect(() => {
    setTakenLessons(
      lesson_list.filter((lesson) => lesson.taken_by === user?.id)
    )
  }, [quiz_list, lesson_list, user])

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "90%" }}>
      <Typography variant="h4" color="primary">
        Categories
      </Typography>
      <Lessons
        quizzes={quiz_list}
        takenLessons={takenLessons}
        userId={authUser?.id}
      />
    </Box>
  )
}

export default CategoryList
