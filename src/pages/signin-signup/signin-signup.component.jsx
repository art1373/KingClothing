import React from "react";
import './signin-signup.styles.scss';
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const signInSignUpPage = () => (
  <div className="signin-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default signInSignUpPage;
