import './App.css'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from "react-router-dom";

import { authCheckState } from './store/actions';

import UserSignup from './components/user/UserSignup/UserSignup'
import UserSignin from './components/user/UserSignin/UserSignin';
import SignupSuccessRedirect from './components/user/UserSignup/SignupSuccessRedirect';
import SigninSuccessRedirect from './components/user/UserSignin/SigninSuccessRedirect';
import FollowUser from './components/follow/FollowUser';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authCheckState()) 
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={UserSignup} />
          <Route path="/signup-success" component={SignupSuccessRedirect} />

          <Route path="/signin" component={UserSignin} />
          <Route path="/signin-success" component={SigninSuccessRedirect} />
          <Route path="/follows" component={FollowUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
