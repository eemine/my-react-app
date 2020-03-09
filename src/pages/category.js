import React from "react";
import { Categories, Container, Jumbotron } from "../components";

function Category() {
  return (
    <div>
      <Jumbotron
        title="Food"
        description="Place where all tastes come together"
      />
      <Container>
        <Categories />
      </Container>
    </div>
  );
}
export default Category;
