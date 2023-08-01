import React from "react";
import { Outlet, Navigate } from "react-router-dom";

type RouteType = {
    children?: JSX.Element,
    [x: string]: any;
}

const PrivateRoute = ({ children, ...rest }: RouteType) => {
  const token = JSON.parse(localStorage.getItem("token") as any);

  // if(!token.sessionCookie){
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("token");
  // }

  return (
    token?.sessionCookie ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;