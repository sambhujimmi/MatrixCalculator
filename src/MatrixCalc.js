import { useState } from "react";
import Matrix from "./Matrix";
import * as math from "mathjs";

const MatrixCalc = ({ matrices }) => {
  const [expression, setExpression] = useState("");
  const handleChange = (e) => {
    setExpression(e.target.value);
  };
  const [mat1, setMat1] = useState({ name: "default" });
  const [mat2, setMat2] = useState({ name: "default" });
  const [op, setOp] = useState("+");
  const [answer, setAnswer] = useState([]);
  const solve = () => {
    if (mat1.name === "default" || mat2.name === "default") {
      return alert("Please select two matrices");
    }
    switch (op) {
      case "+":
        setAnswer(
          math.add(math.matrix(mat1.values), math.matrix(mat2.values))._data
        );
        break;
      case "-":
        setAnswer(
          math.subtract(math.matrix(mat1.values), math.matrix(mat2.values))
            ._data
        );
        break;
      case "*":
        setAnswer(
          math.multiply(math.matrix(mat1.values), math.matrix(mat2.values))
            ._data
        );
        break;
    }
  };
  return (
    <div className="matrix-calc">
      <select
        className="custom-select"
        name="select-matrix"
        id=""
        value={mat1.name}
        onChange={(e) =>
          setMat1(matrices.find((elem) => elem.name === e.target.value))
        }
      >
        <option value="default" disabled>
          Select
        </option>
        {matrices.map((elem, index) => (
          <option key={index} value={elem.name}>
            {elem.name}
          </option>
        ))}
      </select>
      <select
        name="select-op"
        id=""
        className="custom-select"
        value={op}
        onChange={(e) => setOp(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">&minus;</option>
        <option value="*">&times;</option>
      </select>
      <select
        className="custom-select"
        name="select-matrix"
        id=""
        value={mat2.name}
        onChange={(e) =>
          setMat2(matrices.find((elem) => elem.name === e.target.value))
        }
      >
        <option value="default" disabled>
          Select
        </option>
        {matrices.map((elem, index) => (
          <option key={index} value={elem.name}>
            {elem.name}
          </option>
        ))}
      </select>
      <button onClick={solve}>Calculate</button>
      <div className="answer">
        <Matrix
          name="Answer"
          values={answer}
          updateValues={false}
          deleteMatrix={false}
        />
      </div>
      <textarea
        name="calc"
        id="calc"
        cols="30"
        rows="10"
        value={expression}
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
};

export default MatrixCalc;
