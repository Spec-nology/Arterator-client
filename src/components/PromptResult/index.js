import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./style.css";

const PromptResult = () => {
  const location = useLocation();
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const formData = location.state.formData;
      console.log(formData);
      const data = await axios.post(
        "https://arterator.herokuapp.com/prompt",
        formData
      );
      setPrompt(data.data);
    };
    getData();
  }, []);

  return <div>{prompt ? <h1>{prompt.prompt}</h1> : <h1>Loading</h1>} </div>;
};

export default PromptResult;
