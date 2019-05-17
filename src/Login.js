import React from "react";
import "./Login.css";
import LoginContext from "./LoginContext";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
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
      }
    }, 1000);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h2>Login</h2>

        <form className="login__form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="username"
            className="login__input"
            value={this.state.username}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="password"
            className="login__input"
            value={this.state.password}
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Login.contextType = LoginContext;

export default Login;
