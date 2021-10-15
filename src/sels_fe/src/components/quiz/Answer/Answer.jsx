// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom';

// import { authSignin } from '../../../store/actions'

// import Button from '@material-ui/core/Button'
import {
  Box, 
  Typography 
} from '@material-ui/core'


const Answer = () => {

  // const signin = useSelector(state => state.Signin)
  // const [onSubmit, setOnSubmit] = useState(false)
  // const dispatch = useDispatch()
  // const history = useHistory()


  return (
    <Box
      component="form"
      type='submit'
      sx={{ m: '1rem', mx: 'auto', maxWidth: '70%',}}
      onSubmit={e => e.preventDefault()}
    >
      <Typography variant="h4" color="primary">
        Questions
      </Typography>
    </Box>
  ) 
}


export default Answer