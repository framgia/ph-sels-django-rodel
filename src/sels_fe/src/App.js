<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import './App.css';
import Signup from './components/user/UserSignup/UserSignup';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from "react-router-dom";
>>>>>>> 31822ac7 ([TASK] [FE] feature/user-signup-integration)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <Router>
        <Switch>
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
>>>>>>> 31822ac7 ([TASK] [FE] feature/user-signup-integration)
    </div>
  );
}

export default App;
