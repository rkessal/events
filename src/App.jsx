import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useEffect, useState } from "react";
import { Auth as AuthInstance } from "@services/Auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authSrv = new AuthInstance();
  useEffect(() => {
    authSrv.getAuthSubsciption((user) => {
      setIsLoggedIn(!!user);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} authInstance={authSrv} />}
        />
        <Route
          path="/login"
          element={<Auth isLoggedIn={isLoggedIn} authInstance={authSrv} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
