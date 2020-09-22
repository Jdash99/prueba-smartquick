import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { AuthContext } from "./Auth";

// const PrivateRoute = ({ children, currentUser, ...rest }) => {
const PrivateRoute = ({ children, ...rest }) => {  
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute