import { Box, Typography } from "@material-ui/core"

const Answer = () => {
  return (
    <Box
      component="form"
      type="submit"
      sx={{ m: "1rem", mx: "auto", maxWidth: "70%" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Typography variant="h4" color="primary">
        Questions
      </Typography>
    </Box>
  )
}

export default Answer
