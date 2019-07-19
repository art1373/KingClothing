import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom.button.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already Have an Account</h2>
        <span>SignIn With Your Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit" value="Submit Form">
            {" "}
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle}> Sign In With Google</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
