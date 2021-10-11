import React from 'react'

import { Box } from '@material-ui/core'
import { OutlinedInput } from '@material-ui/core'

import { SignupFormControl } from './SignupFormControl'
import { SignupInputLabel } from './SignupInputLabel'
import { SignupFormHelperText } from './SignupFormHelperText'

const UserSignupForm = ({ userData, signup, onChange, onKeyPress }) => {

  return (
      <Box
        component="form"
        type='submit'
        sx={{ m: '1rem', mx: 'auto', maxWidth: '50ch',}}
        onSubmit={e => e.preventDefault()}
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
            onChange={onChange}
          />
          <SignupFormHelperText error={signup.error?.email?.[0]} />
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
            onChange={onChange}
            sx={{ width: '50ch'}}
          />
          <SignupFormHelperText error={signup.error?.username?.[0]} />
        </SignupFormControl>
        <br />
        <SignupFormControl>
          <SignupInputLabel labelFor="signup-first_name" label="First name" isRequired={false}/>
          <OutlinedInput
            id="signup-first_name"
            type='text'
            name='first_name'
            label="First name" 
            value={userData.first_name}
            onChange={onChange}
          />
          <SignupFormHelperText error={signup.error?.first_name?.[0]} />
        </SignupFormControl>
        <br />
        <SignupFormControl>
          <SignupInputLabel labelFor="signup-last_name" label="Last name"  isRequired={false} />
          <OutlinedInput
            id="signup-last_name"
            type='text'
            name='last_name'
            label="Last name"
            value={userData.last_name}
            onChange={onChange}
          />
          <SignupFormHelperText error={signup.error?.last_name?.[0]} />
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
            onChange={onChange}
          />
          <SignupFormHelperText error={signup.error?.password?.[0]} />
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
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
          <SignupFormHelperText error={signup.error?.password2?.[0]} />
        </SignupFormControl> 
      </Box>
  ) 
}


export default UserSignupForm