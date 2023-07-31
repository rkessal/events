import { useState } from "react";

function LoginForm({ handleLogin, loginError }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form onSubmit={(e) => handleLogin(e, { username, password })}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          autoComplete="off"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          autoComplete="off"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
