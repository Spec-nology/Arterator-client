import React, { useState } from "react";
import "./style.css";

const CategorySelect = ({ category, onChange }) => {
  return (
    <>
      <label>{category.categoryname}</label>
      <select
        id={category.categoryname}
        defaultValue="default"
        onChange={onChange}
      >
        <option value="default" disabled={true}>
          {" "}
          Please select
        </option>
        {category.tags.map((tag, index) => (
          <option key={index}>{tag}</option>
        ))}
      </select>
    </>
  );
};

export default CategorySelect;
