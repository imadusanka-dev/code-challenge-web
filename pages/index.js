import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Head from 'next/head'
import Navbar from "../components/Navbar";
import ContentWrapper from "../components/ContentWrapper";

export default function Home() {
  const { isAuthenticated, isLoading, logout, loginWithRedirect, getAccessTokenSilently } = useAuth0();

  useEffect(async () => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      localStorage.setItem('token', token);
    }
  },[isAuthenticated]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Navbar isLoggedIn={isAuthenticated} login={loginWithRedirect} logout={logout}/>
        <div className="container">
          {
            isAuthenticated ?
              <ContentWrapper/> : <h2>You are not logged in..</h2>
          }
        </div>
      </main>
    </>
  )
}
