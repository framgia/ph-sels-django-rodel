import { InputLabel } from "@mui/material"

const CustomInputLabel = ({
  labelFor,
  label,
  isRequired = true,
  variant = "outlined",
}) => {
  return (
    <InputLabel
      htmlFor={labelFor}
      required={false}
      color="secondary"
      variant={variant}
    >
      {label}
    </InputLabel>
  )
}

export { CustomInputLabel }
