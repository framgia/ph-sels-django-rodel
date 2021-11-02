
import { FormHelperText } from '@material-ui/core'


function CustomHelperText ({error})  {
  return (
    <FormHelperText error >
      {error}
    </FormHelperText>
  )
}

export{ CustomHelperText }