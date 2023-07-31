import React, { useEffect, useState } from "react";

function Nav({ authInstance }) {
  const [userInfos, setUserInfos] = useState({});
  async function signOut() {
    return await authInstance.signOut();
  }

  async function getInfos() {
    const userInfos = await authInstance.getCurrentUser();
    if (userInfos) {
      setUserInfos(userInfos);
    }
    console.log(userInfos);
  }

  useEffect(() => {
    getInfos();
  }, []);
  return (
    <header className="header__container">
      <nav className="header__logo">
        <h3>EVENTS.</h3>
      </nav>
      <nav className="header__links">
        <ul>
          <li>{userInfos.email}</li>
          <li>
            <button onClick={() => signOut()}>Sign out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
