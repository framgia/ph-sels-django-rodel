import React, { Fragment } from "react"
import { useHistory, useRouteMatch } from "react-router-dom"

import { Grid } from "@mui/material"
import LessonCard from "./LessonCard"

const Lessons = ({ quizzes, takenLessons }) => {
  const history = useHistory()
  const { path } = useRouteMatch()

  const handleLesson = (quiz_id) => {
    history.push(`${path}/${quiz_id}`)
  }

  return (
    <>
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {quizzes?.length > 0
          ? quizzes.map((quiz, index) => (
              <Fragment key={quiz.id}>
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <LessonCard
                    quiz={quiz}
                    isTaken={takenLessons.some(
                      (lesson) => lesson.quiz === quiz.id
                    )}
                    handleLesson={handleLesson}
                  />
                </Grid>
              </Fragment>
            ))
          : null}
      </Grid>
    </>
  )
}

export default Lessons
