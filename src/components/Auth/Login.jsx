import React, { useState } from "react";
import LoginForm from "./LoginForm";

function Login({ authService }) {
  const [loginError, setLoginError] = useState(false);

  function signIn(username, password) {
    return authService.signIn(username, password);
  }

  async function handleLogin(e, data) {
    const { username, password } = data;
    e.preventDefault();
    try {
      await signIn(username, password);
      setLoginError(false);
    } catch (error) {
      setLoginError(true);
    }
  }
  return (
    <article className="login__container">
      <section className="login__wrapper">
        <h2>Login to continue</h2>
        <div className="login">
          <LoginForm handleLogin={handleLogin} loginError={loginError} />
        </div>
      </section>
      {loginError && (
        <div className="login__error">Login error, check credentials</div>
      )}
    </article>
  );
}

export default Login;
