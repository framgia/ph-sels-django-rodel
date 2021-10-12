import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Box, Typography} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { authSignout } from '../../../store/actions';




function SigninSuccessRedirect() {
  const signin = useSelector(state => state.Signin)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    signin.isAuthenticated !== true && history.push("/signin")
  }, [signin, history])

  const handleSignout = () => {
    dispatch(authSignout())
  }

  return (
    <Box
      sx={{m: '2rem'}}
    >
      <Typography variant="h4">
        Signin Success!
      </Typography> 

      <br/>

      <Typography variant="h5">
        Go back to <Link to="/" >Homepage</Link>
      </Typography>

      <br/>

      <Button 
        sx={{ mx: 'auto', width:'50ch', borderRadius: '5px',}}
        type="secondary" 
        color="primary" 
        variant='contained'
        onClick={handleSignout}
      >
        Signout
      </Button>
    </Box>
  )
}

export default SigninSuccessRedirect