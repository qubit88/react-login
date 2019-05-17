import React from "react";
import { Link } from "react-router-dom";
import LoginContext from "./LoginContext";

function LoginButton() {
  return (
    <div>
      <LoginContext.Consumer>
        {({ logIn, logOut, loggedIn }) => {
          let style = {
            color: loggedIn ? "red" : "green",
            padding: "5px 10px"
          };

          return loggedIn ? (
            <button style={style} onClick={logOut}>
              log out
            </button>
          ) : (
            <button style={style}>
              <Link style={{ textDecoration: "none" }} to="/login">
                log in
              </Link>
            </button>
          );
        }}
      </LoginContext.Consumer>
    </div>
  );
}

export default LoginButton;
