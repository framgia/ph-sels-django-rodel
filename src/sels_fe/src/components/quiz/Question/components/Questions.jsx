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

const Questions = ({ questions }) => {
  const history = useHistory()
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    setUpdate(!update)
  }, [history])

  const handleViewQuestion = (question_id) => {
    history.push(`/question/${question_id}`)
  }
  const handleEditQuestion = (question_id, question_name) => {
    history.push({
      pathname: `/question/${question_id}/edit`,
      question: { id: question_id, name: question_name },
    })
  }
  const handleDeleteQuestion = (question_id, question_name) => {
    history.push({
      pathname: `/question/${question_id}/delete`,
      question: { id: question_id, name: question_name },
    })
  }

  return (
    <>
      <List>
        {questions.length > 0
          ? questions.map((question) => (
              <React.Fragment key={question.id}>
                <Divider />
                <ListItem
                  button
                  onClick={() => handleViewQuestion(question.id)}
                >
                  <ListItemIcon>
                    <Assignment fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary={question.name} />
                  <ListItemSecondaryAction>
                    <Stack
                      direction="row"
                      spacing="0.5rem"
                      sx={{ justifyContent: "center" }}
                    >
                      <IconButton
                        onClick={() =>
                          handleEditQuestion(question.id, question.name)
                        }
                      >
                        <Edit fontSize="medium" />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() =>
                          handleDeleteQuestion(question.id, question.name)
                        }
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

export default Questions
