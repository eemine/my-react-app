import React from "react";
import { Jumbotron, Container, SignUpForm } from "../components";

function SignUp() {
  return <div>
     <Jumbotron
        title="Sign up"
        description="Get better experience, customizations and more"
      />
      <Container center>
        <SignUpForm/>
      </Container>
  </div>;
}

export default SignUp;
