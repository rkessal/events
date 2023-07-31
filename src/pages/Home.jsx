import Events from "@components/Event/Events";
import { Navigate } from "react-router-dom";
import Nav from "@components/Nav/Nav";

function Home({ isLoggedIn, authInstance }) {
  return isLoggedIn ? (
    <>
      <Nav authInstance={authInstance} />
      <Events />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default Home;
