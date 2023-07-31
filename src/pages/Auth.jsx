import Login from "@components/Auth/Login";
import { Navigate } from "react-router-dom";
import { Auth as AuthInstance } from "@services/Auth";
import { useState, useEffect } from "react";

function Auth({ isLoggedIn, authInstance }) {
  console.log(isLoggedIn);
  console.log(authInstance);
  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <Login authService={authInstance} />
  );
}

export default Auth;
