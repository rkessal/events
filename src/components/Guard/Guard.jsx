import React, { useEffect } from "react";
import { Auth } from "../../services/Auth";
import { Route, redirect } from "react-router-dom";

function Guard(props) {
  const authSrv = new Auth();
  useEffect(() => {
    authSrv.getAuthSubsciption((user) => {
      return user ? <Route {...props} /> : redirect("/login");
    });
  }, []);
  return <div>Guard</div>;
}

export default Guard;
