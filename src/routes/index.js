import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={() => {
        return localStorage.getItem("user") ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                prevLocation: path,
                error: "You need to login first!"
              }
            }}
          />
        );
      }}
    />
  );
};
