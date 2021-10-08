import { FormControl } from '@material-ui/core'


function SignupFormControl ({children, variant='outlined'}) {
  return (
    <FormControl 
      // variant={variant}
      color="primary"
      margin="normal"
      sx={{ my: "1rem", width: '70ch' }} 
    >
      {children}
    </FormControl>
  )
}


export { SignupFormControl }