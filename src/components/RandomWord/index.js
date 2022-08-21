import React from "react";
import "./style.css";

const RandomWord = ({ word }) => {
  return (
    <>
      <div className="random-word">
        <h2>Random Word</h2>
        <h1>{word}</h1>
      </div>
    </>
  );
};

export default RandomWord;
