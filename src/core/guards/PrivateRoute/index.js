import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
export default function PrivateRoute({ isLogin }) {
  const auth = useAuth();

  console.log(auth.isLogged);
  return auth.isLogged ? <Outlet /> : <Navigate to="auth/login" replace />;
}
