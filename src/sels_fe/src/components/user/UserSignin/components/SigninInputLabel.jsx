import { InputLabel } from '@material-ui/core'


const SigninInputLabel = ({labelFor, label, isRequired=true}) =>{
  return (
    <InputLabel 
      htmlFor={labelFor}
      required={isRequired}
      color='secondary'
      variant='outlined'
    >
      {label}
    </InputLabel>
  )
}

export { SigninInputLabel }