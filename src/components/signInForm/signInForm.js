import React from "react";
import Button from "../button";
import Input from "../input";
import Label from "../label";
import InputGroup from "../inputGroup";
import "./signInForm.css";

const SignInForm = () => (
  <div className="signInForm">
    <p className="signInForm_text1">
      If you have account please use your credentials to sign in
    </p>
    <InputGroup>
      <Label title="Username" />
      <Input type="text" />
    </InputGroup>
    <InputGroup>b
      <Label title="Password" />
      <Input type="password" />
    </InputGroup>
    <InputGroup>
      <Label title="Forgot password?" />
      <Button title="Sign in" />
    </InputGroup>
    <div className="signInForm_textContainer">
      <p className="signInForm_text2">or</p>
      <p className="signInForm_text3">
        If you do not have account please sign up
      </p>
    </div>
    <Button className="signInForm_signup" title="Sign up" />
  </div>
);

export default SignInForm;
