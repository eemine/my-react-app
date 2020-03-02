import React from "react";
import { Container, ForumBox } from "../components";

function Home() {
  return (
    <Container>
      <ForumBox
        img="http://placeimg.com/300/200/animals"
        categories="Animals"
        topics="Cats"
      />
    </Container>
  );
}

export default Home;
