
import { FormHelperText } from '@material-ui/core'


function SignupFormHelperText ({signup})  {
  return (
    <FormHelperText error >
      {signup.email.length > 0 && signup.email[0]}
    </FormHelperText>
  )
}

export{ SignupFormHelperText }