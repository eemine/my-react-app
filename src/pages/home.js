import React from "react";
import { Container, ForumBox, Jumbotron } from "../components";

function Home() {
  return (
    <>
    <Jumbotron title="Wellcome" description="Todays hot discussions go here"/>
    <Container>
      <ForumBox
        img="http://placeimg.com/300/200/animals"
        categories="Animals"
        topics="Cats"
      />
    </Container>
    </>
  );
}

export default Home;
