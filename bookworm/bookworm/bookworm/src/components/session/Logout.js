import React from "react";
import { useAuth0 } from "../../hooks/react-auth0-spa";

const Logout = () => {
    const { logout, isAuthenticated, user } = useAuth0();
    if (!isAuthenticated) {
      console.log(user)
      return (
        <>
          <h2>Cerrando sesión</h2>
        </>
      );
    }
    logout();
    return (
      <>
        <h2>Cerrando sesión</h2>
        <p>Saliendo...</p>
      </>
    );
  };

  export default Logout;