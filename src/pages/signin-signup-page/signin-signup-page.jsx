import React from "react";
import Signin from "../../components/sign-in/Signin";
import SignUp from "../../components/sign-up/SignUp";
import "./signin-signup.styles.scss";

const SigninSignupPage = () => {
  return (
    <div className="signin-signup">
      <Signin />
      <SignUp />
    </div>
  );
};

export default SigninSignupPage;
