import React from "react";
import "./style.css";

const RandomImage = ({ image }) => {
  return (
    <>
      <div className="image">
        <h3>Random Image</h3>
        <img src={image} />
      </div>
    </>
  );
};

export default RandomImage;
