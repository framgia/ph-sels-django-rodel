import React from 'react'

import { OutlinedInput } from '@material-ui/core'

import { SigninFormControl } from './SigninFormControl'
import { SigninInputLabel } from './SigninInputLabel'
import { SigninFormHelperText } from './SigninFormHelperText'

const UserSigninForm = ({ credentials, signin, onChange, onKeyPress }) => {

  return (
    <>
      <SigninFormControl>
        <SigninInputLabel labelFor="signin-username" label="Username"  />
        <OutlinedInput
          required 
          id="signin-username"
          type='text'
          name='username'
          label="Username" 
          value={credentials.username}
          onChange={onChange}
          sx={{ width: '50ch'}}
        />
        <SigninFormHelperText error={signin.error?.username?.[0]} />
      </SigninFormControl>
      <br />
      <SigninFormControl>
        <SigninInputLabel labelFor="signin-password" label="Password"  />
        <OutlinedInput
          required 
          id="signin-password"
          type='password'
          name='password'
          label="Password"
          value={credentials.password}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <SigninFormHelperText error={signin.error?.password?.[0]} />
      </SigninFormControl>
    </>
  ) 
}


export default UserSigninForm