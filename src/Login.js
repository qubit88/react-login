import React from "react";
import "./Login.css";
import LoginContext from "./LoginContext";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", error: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }
  onSubmit(event) {
    const { username, password } = this.state;

    setTimeout(() => {
      if (username.toLowerCase() === "admin" && password === "1234") {
        this.context.logIn();
        this.context.setUsername(username);
        this.props.history.push("/profile");
      } else {
        this.setState({ error: "Username or password is incorrect." });
      }
    }, 1000);
    event.preventDefault();
  }
  render() {
    const { username, password, error } = this.state;
    return (
      <div className="login">
        <h2>Login</h2>

        <form className="login__form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="username"
            className="login__input"
            value={username}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="password"
            className="login__input"
            value={password}
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>

        {error && <p className="login__error">{error}</p>}
      </div>
    );
  }
}

Login.contextType = LoginContext;

export default Login;
