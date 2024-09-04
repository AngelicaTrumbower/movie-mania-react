import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const search = () => {
      navigate(`/movies`);
  }
  const change = event => {
      setInputValue(event.target.value)
  }

  if (inputValue) {
      localStorage.setItem('inputValue', inputValue)
  }
  return (
    <form id="input__form">
      <input
        type="text"
        placeholder="Movie Title, Year, or Keyword"
        className="input"
        value={inputValue}
        onChange={change}
      />
      <button type="submit" className="input__btn btn" onClick={search}>
        Search Now
      </button>
    </form>
  );
};

export default InputForm;
