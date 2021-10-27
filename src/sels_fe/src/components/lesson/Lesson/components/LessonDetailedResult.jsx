import React from "react"

import { Box } from "@mui/system"
import {
  Stack,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"
import DoDisturbIcon from "@mui/icons-material/DoDisturb"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"

function LessonDetailedResult({ questions, answers, results }) {
  return (
    <Box component="div" sx={{ m: "auto", width: "90%", color: "success" }}>
      <Stack direction="row" sx={{ mx: "auto", justifyContent: "center" }}>
        <Card
          elevation={3}
          sx={{
            width: "90%",
            bgcolor: "background.paper",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="primary"
              component="div"
            >
              Results
            </Typography>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Question</TableCell>
                    <TableCell align="left">Answer</TableCell>
                    <TableCell align="left">Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {answers.map((answer, index) => (
                    <TableRow
                      key={answer.question[0]}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {questions.map(
                          (question) =>
                            question.id === answer.question[0] &&
                            question.question
                        )}
                      </TableCell>
                      <TableCell align="left">{answer.value}</TableCell>
                      <TableCell align="left">
                        {results[index] ? (
                          <CheckCircleOutlineIcon sx={{ fill: "green" }} />
                        ) : (
                          <DoDisturbIcon sx={{ fill: "red" }} />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  )
}

export default LessonDetailedResult
