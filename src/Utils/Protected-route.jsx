import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Protected = (props) => {
  const token = useSelector((state) => state.tokenReducer.userToken);

  let location = useLocation();
  const { children } = props;

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
};
export default Protected;
