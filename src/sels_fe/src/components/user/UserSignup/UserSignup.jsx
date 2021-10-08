import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { authSignup } from '../../../store/actions'

import Button from '@material-ui/core/Button'
import { Box } from '@material-ui/core'
import { OutlinedInput } from '@material-ui/core'
import { FormControl } from '@material-ui/core'

// import { LockOpen } from '@material-ui/icons'

import { SignupFormControl } from './components/SignupFormControl'
import { SignupInputLabel } from './components/SignupInputLabel'
// import { SignupFormHelperText } from './components/SignupFormHelperText'


const initialUserData= {
  "email": "",
  "username": "",
  "first_name": "",
  "last_name": "",
  "password": "",
  "password2": ""
}



const Signup = () => {

  const signup = useSelector(state => state.signup)
  console.log(signup)
  const [userData, setUserData] = useState(initialUserData)
  const [onSubmit, setOnSubmit] = useState(false)
  const dispatch = useDispatch()

  const handleOnChange = event => {
    const {name, value} = event.target
    setUserData({...userData, [name]: value})
  }

  const handleSubmit = () => {
    dispatch(authSignup(userData))
  }

  const handleKeypress = event => {
  if (event.keyCode === 13) {
    dispatch(authSignup(userData))
    }
  }

  return (
    <div>
      
      <Box
        component="form"
        type='submit'
        sx={{
          '& .MuiTextField-root': { mx: 'auto', m: 1, width: '70ch' }, m: '1rem'
        }}
        autoComplete="off"
        onSubmit={e=>e.preventDefault()}
      >
        <SignupFormControl>
          <SignupInputLabel labelFor="signup-email" label="Email"  />
          <OutlinedInput
            required 
            id="signup-email"
            type='email'
            name='email'
            label="Email"  
            value={userData.email}
            onChange={handleOnChange}
          />
        </SignupFormControl>
        <br />
        <SignupFormControl>
          <SignupInputLabel labelFor="signup-username" label="Username"  />
          <OutlinedInput
            required 
            id="signup-username"
            type='text'
            name='username'
            label="Username" 
            value={userData.username}
            onChange={handleOnChange}
          />
        </SignupFormControl>
        <br />
        <SignupFormControl>
          <SignupInputLabel labelFor="signup-first_name" label="First name"  />
          <OutlinedInput
            id="signup-first_name"
            type='text'
            name='first_name'
            label="First name" 
            value={userData.first_name}
            onChange={handleOnChange}
          />
        </SignupFormControl>
        <br />
        <SignupFormControl>
          <SignupInputLabel labelFor="signup-last_name" label="Last name"  />
          <OutlinedInput
            id="signup-last_name"
            type='text'
            name='last_name'
            label="Last name"
            value={userData.last_name}
            onChange={handleOnChange}
          />
        </SignupFormControl>
        <br />
        <SignupFormControl>
          <SignupInputLabel labelFor="signup-password" label="Password"  />
          <OutlinedInput
            required 
            id="signup-password"
            type='password'
            name='password'
            label="Password"
            value={userData.password}
            onChange={handleOnChange}
          />
        </SignupFormControl>
        <br />
        <SignupFormControl>
          <SignupInputLabel labelFor="signup-password" label="Confirm Password"  />
          <OutlinedInput
            required 
            id='signup-password2'
            type='password'
            name='password2'
            label="Confirm Password"
            value={userData.password2}
            onChange={handleOnChange}
            onKeyPress={handleKeypress}
          />
        </SignupFormControl> 
        <br />
        <Button 
          sx={{ mx: 'auto', mb: 1, width:'50ch', borderRadius: 5,}}
          type="secondary" 
          disabled = {onSubmit ? true : false }
          variant='contained'
          onClick={(event)=>handleSubmit(event)}
        >
          {onSubmit ? 'SIGNING UP' : 'SIGN UP' }
        </Button>
        <br/>
          
      </Box>
      
    </div>
  ) 
}


export default Signup