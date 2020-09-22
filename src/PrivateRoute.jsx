import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { AuthContext } from "./Auth";

const PrivateRoute = ({ children, currentUser, ...rest }) => {

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