import React from "react";
import Button from "@mui/material/Button"
import { useAuth0 } from "../../hooks/react-auth0-spa";

const Login = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  // console.log(loginWithRedirect, typeof loginWithRedirect);
  if (isAuthenticated == true)
  {
    console.log("POWAH")
    console.log(user['email']);
  }
  return (
    <>
      {isAuthenticated ? (
        <p>Logged</p>
      ) : (
        <>
          <h3>Not logged</h3>
          <Button
            onClick={() =>
              loginWithRedirect({
                mode: "signUp",
              })
            }
          >
            Login
          </Button>
        </>
      )}
    </>
  );
};

export default Login;
