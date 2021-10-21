import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core"

import { Divider, Stack } from "@mui/material"
import { Assignment, Delete, Edit } from "@material-ui/icons"

const Quizzes = ({ quizzes }) => {
  const history = useHistory()
  const [update, setUpdate] = useState(false)
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

  return (
    <>
      <List>
        {quizzes.length > 0
          ? quizzes.map((quiz) => (
              <React.Fragment key={quiz.id}>
                <Divider />
                <ListItem button onClick={() => handleViewQuiz(quiz.id)}>
                  <ListItemIcon>
                    <Assignment fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary={quiz.name} />
                  <ListItemSecondaryAction>
                    <Stack
                      direction="row"
                      spacing="0.5rem"
                      sx={{ justifyContent: "center" }}
                    >
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
