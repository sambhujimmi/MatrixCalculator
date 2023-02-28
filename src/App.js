import { useState } from "react";
import Matrix from "./Matrix";
import AddMatrix from "./AddMatrix";
import MatrixCalc from "./MatrixCalc";
import "./App.css";

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
      <MatrixCalc />
    </div>
  );
}

export default App;
