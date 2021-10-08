
import { Link } from 'react-router-dom';
import { Box, Typography} from '@material-ui/core'




function SignupSuccessRedirect() {
  return (
    <Box
      sx={{m: '2rem'}}
    >
      <Typography variant="h4">
        Signup Success!
      </Typography>
      <br/>
      <Typography variant="h5">
        Go back to <Link to="/" >Homepage</Link>
      </Typography>
    </Box>
  )
}

export default SignupSuccessRedirect