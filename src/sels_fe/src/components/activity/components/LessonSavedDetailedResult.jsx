import React, { Fragment } from "react"
import { Box } from "@mui/system"
import {
  Stack,
  Card,
  CardContent,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material"
import { profileMedia } from "./style"

function LessonSavedDetailedResult({
  user,
  questions,
  choices,
  answeredQuestions,
  results,
}) {
  return (
    <Box sx={{ mx: "auto" }}>
      <Stack
        direction="row"
        spacing={6}
        sx={{ mt: "2rem", justifyContent: "center" }}
      >
        <Card elevation={0} sx={{ mt: "2rem" }}>
          <CardContent>
            <CardMedia
              component="img"
              image={
                "https://images.unsplash.com/photo-1596700227860-03590ad3a755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              }
              alt="user profile"
              sx={profileMedia}
            />
            <Typography variant="h6" color="green">
              {user?.username}
            </Typography>
          </CardContent>
        </Card>
        <Card
          elevation={4}
          sx={{
            mx: "auto",
            p: "0.5rem",
            justifyContent: "right",
            borderRadius: "0.25rem",
            bgcolor: "#e8e8e8",
          }}
        >
          <Stack
            sx={{
              mx: "auto",
              minWidth: 550,
              maxWidth: 720,
              borderStyle: "inset",
              borderRadius: "0.5rem",
            }}
          >
            <Typography
              variant="h6"
              color="green"
              sx={{
                bgcolor: "#fff",
              }}
            >
              Learnings
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Question</TableCell>
                    <TableCell align="left">Answer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {answeredQuestions.map((answered, index) =>
                    results[index] ? (
                      <Fragment key={answered.id}>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          {questions.map(
                            (question) =>
                              question.id === answered.question && (
                                <TableCell
                                  key={question.id}
                                  component="th"
                                  scope="row"
                                >
                                  {question.question}
                                </TableCell>
                              )
                          )}
                          {choices.map(
                            (choice) =>
                              choice.id === answered.answer && (
                                <TableCell key={choice.id} align="left">
                                  {choice.value}
                                </TableCell>
                              )
                          )}
                        </TableRow>
                      </Fragment>
                    ) : null
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Card>
      </Stack>
    </Box>
  )
}

export default LessonSavedDetailedResult
