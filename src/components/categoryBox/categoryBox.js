import React from "react";
import "./categoryBox.css";

const CategoryBox = ({ img, categories, topics }) => (
  <div className="categoryBox">
    <div className="categoryBox_image">
      <img alt="" src={img} />
    </div>
    <div className="categoryBox_description">
      <div className="categoryBox_categories">{categories}</div>
      <div className="categoryBox_topics">{topics}</div>
    </div>
  </div>
);

export default CategoryBox;
