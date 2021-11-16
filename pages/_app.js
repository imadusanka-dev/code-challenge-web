import { Auth0Provider } from '@auth0/auth0-react';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-8bwc7s1a.us.auth0.com"
      clientId="QDJ9GrQdZ2wUeyKeEj2GSqljYRNDqsiM"
      redirectUri="http://localhost:3000"
      audience="search-app"
      scope="openid profile email"
    >
      <ToastContainer/>
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp
