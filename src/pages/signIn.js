import React from "react";
import { Jumbotron, Container } from "../components";
import SigInForm from "../components/sigInForm";

function SignIn() {
  return (
    <div>
      <Jumbotron title="Sign in" description="Get close to discussions" />
      <Container>
        <SigInForm />
      </Container>
    </div>
  );
}

export default SignIn;
