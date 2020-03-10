import React from "react";
import "./categoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ id, img, title, categories, topics }) => (
  <Link to={`/category/${id}`} className="categoryCard">
    <div className="categoryCard_image">
      <img alt="" src={img} />
      <div className="categoryCard_title">{title}</div>
    </div>
    <div className="categoryCard_description">
      <div className="categoryCard_details">
        <div className="categoryCard_count">{categories}</div>
        <div className="categoryCard_text">Categories</div>
      </div>
      <div className="categoryCard_details">
        <div className="categoryCard_count">{topics}</div>
        <div className="categoryCard_text">Topics</div>
      </div>
    </div>
  </Link>
);

export default CategoryCard;
