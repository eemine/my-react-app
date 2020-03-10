import React from "react";
import "./sigInForm.css";
import Button from "../button";
import Link from "../link";

const SigInForm = () => (
  <div className="signInForm">
    <div className="signInForm_text">
      <p>If you have account please use your credentials to sign in</p>
    </div>
    <form>
        <div className="signInForm_inputForm">
          <label className="signInForm_inputTitle">Username</label>
          <input className="signInForm_input" type="text" />
        </div>
        <div className="signInForm_inputForm">
          <label className="signInForm_inputTitle">Password</label>
          <input className="signInForm_input" type="text" />
        </div>

      <div>
        <label className="signInForm_subtext">Forgot password?</label>
        <Button title="Sign in" />
      </div>
    </form>
    <div className="signInForm_text">
      <p>or</p>
    </div>
    <div className="signInForm_text">
      <p>If you do not have account please sign up</p>
    </div>
    <Link title="Sign up" />
  </div>
);

export default SigInForm;
