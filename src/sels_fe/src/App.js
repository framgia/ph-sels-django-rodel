import './App.css'
import UserSignup from './components/user/UserSignup/UserSignup'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from "react-router-dom";

import SignupSuccessRedirect from './components/user/UserSignup/SignupSuccessRedirect';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={UserSignup} />
          <Route path="/signup-success" component={SignupSuccessRedirect} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
