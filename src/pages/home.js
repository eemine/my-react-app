import React from "react";
import { Container, CategoryCard, Jumbotron } from "../components";

function Home() {
  return (
    <>
      <Jumbotron
        title="Wellcome"
        description="Todays hot discussions go here"
      />
      <Container>
        <div className="categoryCard_container">
          <CategoryCard
            id="food"
            img="http://placeimg.com/300/200/any"
            title="Food"
            categories="29"
            topics="172"
          />
          <CategoryCard
            id="animals"
            img="http://placeimg.com/300/200/animals"
            title="Animals"
            categories="49"
            topics="218"
          />
          <CategoryCard
            id="plants"
            img="http://placeimg.com/300/200/nature"
            title="Plants"
            categories="22"
            topics="160"
          />
          <CategoryCard
            id="health"
            img="http://placeimg.com/300/200/people"
            title="Health"
            categories="35"
            topics="183"
          />
        </div>
      </Container>
    </>
  );
}

export default Home;
