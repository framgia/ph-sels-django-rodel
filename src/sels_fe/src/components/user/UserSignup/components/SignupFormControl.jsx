import { FormControl } from '@material-ui/core'


function SignupFormControl ({children, variant='outlined'}) {
  return (
    <FormControl 
      variant={variant}
      color="primary"
      margin="normal"
      sx={{ mx: 'auto', width: '50ch' }} 
      fullWidth
    >
      {children}
    </FormControl>
  )
}


export { SignupFormControl }