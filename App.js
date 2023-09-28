import { useState } from "react";
import Matrix from "./Matrix";
import AddMatrix from "./AddMatrix";
import MatrixCalc from "./MatrixCalc";

function App() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [matrices, setMatrices] = useState([
    {
      name: "A",
      rows: 3,
      cols: 3,
      values: Array.from(Array(3), () => new Array(3).fill("")),
    },
  ]);

  const updateValues = (e) => {
    let matname = e.target.getAttribute("matname");
    let r = e.target.getAttribute("r");
    let c = e.target.getAttribute("c");
    let value = e.target.value;
    let updationMatrix = JSON.parse(
      JSON.stringify(matrices.find((matrix) => matrix.name === matname))
    );
    updationMatrix.values[r][c] = value;
    setMatrices(
      matrices.map((elem) =>
        elem.name !== updationMatrix.name ? elem : updationMatrix
      )
    );
  };

  const deleteMatrix = (e) => {
    let matname = e.target.id;
    setMatrices(matrices.filter((elem) => elem.name !== matname));
  };

  const addRowCol = (e) => {
    const matname = e.target.getAttribute("mat");
    let updationMatrix = JSON.parse(
      JSON.stringify(matrices.find((matrix) => matrix.name === matname))
    );
    let r = updationMatrix.rows;
    let c = updationMatrix.cols;
    let v = updationMatrix.values;
    switch (e.target.id) {
      case "add-col":
        ++c;
        break;
      case "rmv-col":
        if (c === 1) {
          alert("WHY?!!");
        } else {
          --c;
        }
        break;
      case "add-row":
        ++r;
        break;
      case "rmv-row":
        if (r === 1) {
          alert("WHY?!!");
        } else {
          --r;
        }
        break;

      default:
        alert("Error in addRowCol!");
        break;
    }

    updationMatrix.rows = r;
    updationMatrix.cols = c;
    updationMatrix.values = Array.from(Array(r), () => new Array(c).fill(""));
    for (let i = 0; i < v.length; i++) {
      if (i < updationMatrix.values.length) {
        for (let j = 0; j < v[i].length; j++) {
          if (j < updationMatrix.values[0].length) {
            updationMatrix.values[i][j] = v[i][j];
          }
        }
      }
    }
    setMatrices(
      matrices.map((elem) =>
        elem.name !== updationMatrix.name ? elem : updationMatrix
      )
    );
  };

  return (
    <div className="App">
      <h1>Matrix Calculator</h1>
      <div className="matrix-container">
        {matrices.map((elem, index) => {
          return (
            <Matrix
              key={index}
              name={elem.name}
              rows={elem.rows}
              cols={elem.cols}
              values={elem.values}
              updateValues={updateValues}
              deleteMatrix={deleteMatrix}
              addRowCol={addRowCol}
              notAnswer={true}
            />
          );
        })}
      </div>
      <AddMatrix
        rows={rows}
        setRows={setRows}
        cols={cols}
        setCols={setCols}
        matrices={matrices}
        setMatrices={setMatrices}
      />
      <MatrixCalc matrices={matrices} />
    </div>
  );
}

export default App;
