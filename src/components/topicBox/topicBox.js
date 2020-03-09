import React from "react";
import "./topicBox.css";
import { Link } from "react-router-dom";

const TopicBox = ({ img, title, topic }) => (
  <Link to="#" className="topicBox">
    <div className="topicBox_image">
      <img alt="food" src={img} />
    </div>
    <div className="topicBox_title">{title}</div>
    <div className="topicBox_detail">
      <div className="topicBox_topic">{topic}</div>
      <div className="topicBox_text">Topics</div>
    </div>
  </Link>
);
export default TopicBox;
