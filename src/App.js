import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import AppLayout from './components/AppLayout'
import Login from './components/Login'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/">
            <AppLayout/>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
