import React from "react";
import TopicCard from "../topicCard/topicCard";
import "./categories.css";

const Categories = () => (
  <>
    <TopicCard
      img="http://placeimg.com/300/200/any"
      title="Cuisines"
      topic="33"
    />
    <TopicCard
      img="http://placeimg.com/300/200/any"
      title="Fast food"
      topic="31"
    />
    <TopicCard
      img="http://placeimg.com/300/200/any"
      title="Vegetable"
      topic="27"
    />
    <TopicCard img="http://placeimg.com/300/200/any" title="Meat" topic="17" />
    <TopicCard img="http://placeimg.com/300/200/any" title="Pizza" topic="23" />
    <TopicCard
      img="http://placeimg.com/300/200/any"
      title="Burger"
      topic="25"
    />
  </>
);

export default Categories;
