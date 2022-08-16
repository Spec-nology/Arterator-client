import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import CategorySelect from "../CategorySelect";

const serverURL =
  "https://arterator.herokuapp.com/categories/categorieswithtags";

const PromptForm = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [formData, setFormData] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(serverURL);
      setCategoryData(data.data);
    };
    getData();
  }, []);

  useEffect(() => {
    let output = {};
    categoryData.forEach((i) => {
      output[i.categoryname] = null;
      console.log(output);
    });
    setFormData(output);
  }, [categoryData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);

    navigate("/promptresult", {
      state: {
        formData,
      },
    });
  };

  useEffect(() => {
    const values = Object.values(formData);
    if (!values.includes(null) && values.length > 0) {
      setButtonDisabled(false);
    }
  }, [formData]);

  const updateSelection = (e) => {
    console.log(e.target.id);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div>
        {categoryData ? (
          <form onSubmit={handleSubmit}>
            {categoryData.map((i) => (
              <CategorySelect
                key={i.categoryid}
                category={i}
                onChange={updateSelection}
              />
            ))}
            <button disabled={buttonDisabled}>get prompt</button>
          </form>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default PromptForm;
