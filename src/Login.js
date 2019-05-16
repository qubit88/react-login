import React from "react";
import "./Login.css";

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
  onSubmit() {
    console.log(this.state.username, this.state.password);
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
        </form>
      </div>
    );
  }
}

export default Login;
