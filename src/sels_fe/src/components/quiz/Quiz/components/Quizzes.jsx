import React, { useState, useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

import debounce from "lodash.debounce"
import { getQuizList, updateQuiz } from "../../../../store/actions"

import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  OutlinedInput,
} from "@material-ui/core"

import { Divider, Stack } from "@mui/material"
import { Assignment, Delete, Edit } from "@material-ui/icons"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"

import { CustomFormControl } from "./CustomFormControl"
import { CustomInputLabel } from "./CustomInputLabel"

const Quizzes = ({ quizzes }) => {
  const history = useHistory()
  const [update, setUpdate] = useState(false)

  const [query, setQuery] = useState({ search: "" })
  const [dbValue, setDbValue] = useState({ search: "" })
  const dispatch = useDispatch()

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

  useEffect(() => {
    setUpdate(!update)
  }, [history])

  const handleViewQuiz = (quiz_id) => {
    history.push(`/quiz/${quiz_id}`)
  }

  const handleEditQuiz = (quiz_id, quiz_name) => {
    history.push({
      pathname: `/quiz/${quiz_id}/edit`,
      quiz: { id: quiz_id, name: quiz_name },
    })
  }

  const handleDeleteQuiz = (quiz_id, quiz_name) => {
    history.push({
      pathname: `/quiz/${quiz_id}/delete`,
      quiz: { id: quiz_id, name: quiz_name },
    })
  }

  const handleActiveQuiz = (quiz) => {
    let newQuiz = { ...quiz }
    newQuiz["is_active"] = !quiz.is_active
    dispatch(updateQuiz(quiz.id, newQuiz))
  }

  return (
    <>
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
      <List>
        {quizzes.length > 0
          ? quizzes.map((quiz) => (
              <React.Fragment key={quiz.id}>
                <Divider />
                <ListItem button onClick={() => handleViewQuiz(quiz.id)}>
                  <ListItemIcon>
                    <Assignment fontSize="large" />
                  </ListItemIcon>
                  <ListItemText
                    primary={quiz.name}
                    secondary={quiz.description}
                  />
                  <ListItemSecondaryAction>
                    <Stack
                      direction="row"
                      spacing="0.5rem"
                      sx={{ justifyContent: "center" }}
                    >
                      <IconButton
                        color={quiz.is_active ? "primary" : "inherit"}
                        onClick={() => handleActiveQuiz(quiz)}
                      >
                        {quiz.is_active ? (
                          <CheckBoxIcon fontSize="medium" />
                        ) : (
                          <CheckBoxOutlineBlankIcon fontSize="medium" />
                        )}
                      </IconButton>
                      <IconButton
                        onClick={() => handleEditQuiz(quiz.id, quiz.name)}
                      >
                        <Edit fontSize="medium" />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteQuiz(quiz.id, quiz.name)}
                      >
                        <Delete fontSize="medium" />
                      </IconButton>
                    </Stack>
                  </ListItemSecondaryAction>
                </ListItem>
              </React.Fragment>
            ))
          : null}
      </List>
    </>
  )
}

export default Quizzes
