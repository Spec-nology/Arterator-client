import React from "react";
import Styles from "./style.module.css";

const RandomWord = ({ word }) => {
  return (
    <>
      <div className={Styles.randomWord}>
        <div>
          <h2>Random Word</h2>
        </div>
        <div className={Styles.displayWord}>
          <p>{word}</p>
        </div>
      </div>
    </>
  );
};

export default RandomWord;
