import React from "react";
import Style from "./style.module.css";

const RandomImage = ({ image }) => {
  return (
    <>
      <div className={Style.image}>
        <h2>Random Image</h2>
        <img src={image} />
      </div>
    </>
  );
};

export default RandomImage;
