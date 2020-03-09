import React from "react";
import "./categoryBox.css";
import { Link } from "react-router-dom";

const CategoryBox = ({ img, title, categories, topics }) => (
  <Link to="/category" className="categoryBox">
    <div className="categoryBox_image">
      <img alt="" src={img} />
      <div className="categoryBox_title">{title}</div>
    </div>
    <div className="categoryBox_description">
      <div className="categoryBox_details">
        <div className="categoryBox_count">{categories}</div>
        <div className="categoryBox_text">Categories</div>
      </div>
      <div className="categoryBox_details">
        <div className="categoryBox_count">{topics}</div>
        <div className="categoryBox_text">Topics</div>
      </div>
    </div>
  </Link>
);

export default CategoryBox;
