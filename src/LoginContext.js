import React from "react";

const LoginContext = React.createContext({
  loggedIn: false,
  username: "",
  logOut: () => {},
  logIn: () => {},
  setUsername: () => {}
});

export default LoginContext;
