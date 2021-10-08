import { InputLabel } from '@material-ui/core'


const SignupInputLabel = ({labelFor, label}) =>{
  return (
    <InputLabel 
      htmlFor={labelFor}
      required 
      color='secondary'
      variant='outlined'
    >
      {label}
    </InputLabel>
  )
}

export { SignupInputLabel }