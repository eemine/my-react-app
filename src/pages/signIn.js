import React from "react";
import { Jumbotron, Container } from "../components";
import SignInForm from "../components/signInForm";

function SignIn() {
  return (
    <div>
      <Jumbotron title="Sign in" description="Get close to discussions" />
      <Container center>
        <SignInForm />
      </Container>
    </div>
  );
}

export default SignIn;
