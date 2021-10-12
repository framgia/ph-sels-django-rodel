
import { FormHelperText } from '@material-ui/core'


function SigninFormHelperText ({error})  {
  return (
    <FormHelperText error >
      {error}
    </FormHelperText>
  )
}

export{ SigninFormHelperText }