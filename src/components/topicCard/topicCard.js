import React from "react";
import "./topicCard.css";
import { Link } from "react-router-dom";

const TopicCard = ({ img, title, topic }) => (
  <Link to="#" className="topicCard">
    <div className="topicCard_image">
      <img alt="food" src={img} />
    </div>
    <div className="topicCard_title">{title}</div>
    <div className="topicCard_detail">
      <div className="topicCard_topic">{topic}</div>
      <div className="topicCard_text">Topics</div>
    </div>
  </Link>
);
export default TopicCard;
