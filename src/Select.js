import { useState } from "react";

const Select = ({ setRows, setCols, createMatrix, setFill }) => {
  const [selectValue, setSelectValue] = useState("3");

  const updateStates = (e) => {
    setSelectValue(e.target.value);

    setRows(Number(e.target.value));

    setCols(Number(e.target.value));
  };

  return (
    <div className="select">
      <select
        className="custom-select"
        name="custom-select"
        id="custom-select"
        defaultValue={selectValue}
        onChange={updateStates}
      >
        <option value="2">2 &times; 2</option>
        <option value="3">3 &times; 3</option>
        <option value="4">4 &times; 4</option>
        <option value="5">5 &times; 5</option>
      </select>
      <button
        onClick={() => {
          setFill(""); /* *********!!!!!!NOT WORKING!!!!!!********* */
          createMatrix("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Select;
