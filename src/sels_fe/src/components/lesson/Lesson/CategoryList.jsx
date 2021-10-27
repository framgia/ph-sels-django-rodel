import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { Box, Typography } from "@material-ui/core"

import Lessons from "./components/Lessons"

const CategoryList = ({ user }) => {
  const quizList = useSelector((state) => state.Quiz.quiz_list)
  const lessonList = useSelector((state) => state.Lesson.lesson_list)
  const authUser = useSelector((state) => state.AuthUser.data)
  const [takenLessons, setTakenLessons] = useState([])

  useEffect(() => {
    setTakenLessons(lessonList.filter((lesson) => lesson.taken_by === user?.id))
  }, [quizList, lessonList, user])

  return (
    <Box component="div" sx={{ m: "1rem", mx: "auto", maxWidth: "90%" }}>
      <Typography variant="h4" color="primary">
        Categories
      </Typography>
      <Lessons
        quizzes={quizList}
        takenLessons={takenLessons}
        userId={authUser?.id}
      />
    </Box>
  )
}

export default CategoryList
