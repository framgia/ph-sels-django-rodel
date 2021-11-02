import React, { Fragment, useState, useEffect, useRef } from "react"
import { useHistory, useRouteMatch } from "react-router-dom"
import { useDispatch } from "react-redux"
import debounce from "lodash.debounce"

import { Box, Stack, Grid, OutlinedInput, Typography } from "@mui/material"
import LessonCard from "./LessonCard"
import { CustomFormControl } from "./CustomFormControl"
import { CustomInputLabel } from "./CustomInputLabel"

import { getQuizList } from "../../../../store/actions"

const Lessons = ({ quizzes, takenLessons }) => {
  const history = useHistory()
  const { path } = useRouteMatch()
  const [query, setQuery] = useState({ search: "" })
  const [dbValue, setDbValue] = useState({ search: "" })
  const dispatch = useDispatch()

  const handleLesson = (quiz_id) => {
    history.push(`${path}/${quiz_id}`)
  }

  const debouncedSave = useRef(
    debounce((nextValue) => setDbValue(nextValue), 350)
  ).current

  const handleSearchChange = (event) => {
    const { name, value } = event.target
    setQuery({ ...query, [name]: value })
    debouncedSave({ ...dbValue, [name]: value })
  }

  const handleSubmitQuery = (query) => {
    dispatch(getQuizList(query))
  }

  useEffect(() => {
    handleSubmitQuery(query)
  }, [dbValue])

  return (
    <Stack
      direction="column"
      sx={{ m: "1rem", maxWidth: "100%", alignSelf: "center" }}
    >
      <Box
        component="form"
        type="submit"
        noValidate
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
        sx={{ m: "1rem", maxWidth: "100%", justifyContent: "right" }}
      >
        <CustomFormControl>
          <CustomInputLabel labelFor="quiz-search" label="Search" />
          <OutlinedInput
            id="quiz-search"
            type="text"
            name="search"
            label="search"
            value={query.search}
            onChange={handleSearchChange}
            sx={{ width: "50ch" }}
          />
        </CustomFormControl>
      </Box>
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {quizzes?.length > 0 ? (
          quizzes.map((quiz, index) =>
            quiz.is_active ? (
              <Fragment key={quiz.id}>
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <LessonCard
                    quiz={quiz}
                    isTaken={
                      takenLessons > 0 &&
                      takenLessons.some((lesson) => lesson.quiz === quiz.id)
                    }
                    handleLesson={handleLesson}
                  />
                </Grid>
              </Fragment>
            ) : null
          )
        ) : (
          <Typography variant="h6" color="primary" sx={{ alignSelf: "center" }}>
            Not Found ... Try another search.
          </Typography>
        )}
      </Grid>
    </Stack>
  )
}

export default Lessons
