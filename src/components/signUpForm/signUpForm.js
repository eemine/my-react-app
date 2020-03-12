import React from "react";
import InputGroup from "../inputGroup";
import Label from "../label";
import Input from "../input";
import Button from "../button";
import "./signUpForm.css";

const SignUpForm = () => (
  <div className="signUpForm">
    <p className="signUpForm_text1">
      Fill all required fields with data to sign up
    </p>
    <InputGroup>
      <Label title="Username" />
      <Input type="text" />
    </InputGroup>
    <InputGroup>
      <Label title="Password" />
      <Input type="password" />
    </InputGroup>
    <InputGroup>
      <Label title="Repeat password" />
      <Input type="password" />
    </InputGroup>
    <InputGroup>
      <Label title="Email" />
      <Input type="email" />
    </InputGroup>
    <InputGroup className="buttonContainer"> 
      <Button className="signUpForm_signup" title="Sign up" />
    </InputGroup>
    <div className="signUpForm_textContainer">
      <p className="signUpForm_text2">or</p>
      <p className="signUpForm_text3">
        If you have account please use your credentials to sign in
      </p>
    </div>

    <Button className="signUpForm_signin" title="Sign in" />
  </div>
);

export default SignUpForm;
