import React from "react";
import { Topics, Container, Jumbotron } from "../components";

function Category() {
  return (
    <div>
      <Jumbotron
        title="Food"
        description="Place where all tastes come together"
      />
      <Container>
        <Topics />
      </Container>
    </div>
  );
}
export default Category;
