
import { FormHelperText } from '@material-ui/core'


function SignupFormHelperText ({error})  {
  return (
    <FormHelperText error >
      {error}
    </FormHelperText>
  )
}

export{ SignupFormHelperText }