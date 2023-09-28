import { useState } from "react";
import Matrix from "./Matrix";
import * as math from "mathjs";
import Keyboard from "./Keyboard";

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
    let m1, m2;
    if (mat1.name === "Answer") {
      m1 = answer;
    } else {
      m1 = matrices.find((elem) => elem.name === mat1.name).values;
    }
    if (mat2.name === "Answer") {
      m2 = answer;
    } else {
      m2 = matrices.find((elem) => elem.name === mat2.name).values;
    }
    switch (op) {
      case "+":
        setAnswer(math.add(math.matrix(m1), math.matrix(m2))._data);
        break;
      case "-":
        setAnswer(math.subtract(math.matrix(m1), math.matrix(m2))._data);
        break;
      case "*":
        setAnswer(math.multiply(math.matrix(m1), math.matrix(m2))._data);
        break;
      case "xor":
        setAnswer(
          math
            .xor(math.matrix(m1), math.matrix(m2))
            ._data.map((elem) => elem.map((item) => (item === true ? 1 : 0)))
        );
        break;

      case "mask":
        setAnswer(
          m1.map((r, i) => r.map((elem, j) => (m2[i][j] === 0 ? 0 : elem)))
        );
        break;
      default:
        alert("Something went wrong!");
    }
  };
  return (
    <div className="matrix-calc">
      <select
        className="custom-select"
        name="select-matrix"
        id=""
        value={mat1.name}
        onChange={(e) => setMat1({ name: e.target.value })}
      >
        <option value="default" disabled>
          Select
        </option>
        {matrices.map((elem, index) => (
          <option key={index} value={elem.name}>
            {elem.name}
          </option>
        ))}
        {answer.length && <option value="Answer">Answer</option>}
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
        <option value="xor">xor</option>
        <option value="mask">Mask</option>
      </select>
      <select
        className="custom-select"
        name="select-matrix"
        id=""
        value={mat2.name}
        onChange={(e) => setMat2({ name: e.target.value })}
      >
        <option value="default" disabled>
          Select
        </option>
        {matrices.map((elem, index) => (
          <option key={index} value={elem.name}>
            {elem.name}
          </option>
        ))}
        {answer.length && <option value="Answer">Answer</option>}
      </select>
      <button onClick={solve}>Calculate</button>
      <div className="answer">
        <Matrix
          name="Answer"
          values={answer}
          updateValues={false}
          deleteMatrix={false}
          addRowCol={""}
          notAnswer={false}
        />
      </div>
      <Keyboard
        matrices={matrices}
        answer={answer}
        expression={expression}
        setExpression={setExpression}
      />
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
