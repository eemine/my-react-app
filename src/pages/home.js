import React from "react";
import { Container, CategoryBox, Jumbotron } from "../components";

function Home() {
  return (
    <>
      <Jumbotron
        title="Wellcome"
        description="Todays hot discussions go here"
      />
      <Container>
        <CategoryBox
          img="http://placeimg.com/300/200/any"
          title="Food"
          categories="49"
          topics="218"
        />
      </Container>
    </>
  );
}

export default Home;
