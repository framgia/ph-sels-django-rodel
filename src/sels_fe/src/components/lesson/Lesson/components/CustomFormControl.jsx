import { FormControl } from "@mui/material"

function CustomFormControl({ children, variant = "outlined" }) {
  return (
    <FormControl
      variant={variant}
      color="primary"
      margin="normal"
      sx={{ mx: "auto", width: "50ch" }}
      fullWidth
    >
      {children}
    </FormControl>
  )
}

export { CustomFormControl }
