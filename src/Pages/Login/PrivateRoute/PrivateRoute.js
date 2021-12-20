import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate,  Routes  } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';


function PrivateRoute(props) {
    const { children, ...rest } = props;
  
    const { allContext } = useAuth();
    const { user,loading } = allContext;
  
    if (loading) {
      return (
        <div className="text-center my-5 py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    }

    return (
        <Routes
        {...rest}
        render={({ location }) =>
          user.displayName ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
}

export default PrivateRoute;