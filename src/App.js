import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import AppLayout from './components/AppLayout'
import Login from './components/Login'
import PrivateRoute from './PrivateRoute'

function App() {
  // const [currentUser, setCurrentUser] = useState(null)
  // // const [currentUser, setCurrentUser] = useState({email:'admin@smartquick.com', name: 'Keanu Reeves', password:'admin', type:'coordinador'})
  // const handleCurrentUser = (val) => {
  //   console.log("handling")
  //   console.log(val)
  //   setCurrentUser(val)
  // }
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
    // <div className="App">
    //   <Router>
    //     <Switch>
    //       <Route exact path="/login">
    //         <Login handleCurrentUser={handleCurrentUser}/>
    //       </Route>
    //       <PrivateRoute currentUser={currentUser} path="/">
    //         <AppLayout currentUser={currentUser} handleCurrentUser={handleCurrentUser}/>
    //       </PrivateRoute>
    //     </Switch>
    //   </Router>      
    // </div>
  );
}

export default App;
