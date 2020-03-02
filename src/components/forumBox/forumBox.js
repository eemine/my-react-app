import React from "react";
import "./forumBox.css";

const ForumBox = ({ img, categories, topics }) => (
  <div className="forumBox">
    <div className="forumBox_image">
      <img alt="" src={img} />
    </div>
    <div className="forumBox_description">
      <div className="forumBox_categories">{categories}</div>
      <div className="forumBox_topics">{topics}</div>
    </div>
  </div>
);

export default ForumBox;
