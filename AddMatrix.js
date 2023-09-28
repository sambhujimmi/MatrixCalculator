import { useState } from "react";
import Modal from "./Modal";
import Select from "./Select";

const AddMatrix = ({ rows, setRows, cols, setCols, matrices, setMatrices }) => {
  const names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const [fill, setFill] = useState("");

  const updateFill = (e) => {
    setFill(e.target.value);
  };

  const createMatrix = (f) => {
    if (rows === "" || cols === "" || rows < 1 || cols < 1) {
      return alert("No of rows or columns must be 1 or more");
    }

    if (matrices.length > 25) {
      return alert("You are a FAILURE");
    }

    let values = Array.from(Array(rows), () => new Array(cols).fill(""));

    if (f === "") {
      values.forEach((elem) =>
        elem.forEach((_, index, array) => (array[index] = ""))
      );
    } else if (fill === "i") {
      values.forEach((elem, index) =>
        elem.forEach(
          (_, index1, array) => (array[index1] = index === index1 ? 1 : 0)
        )
      );
    } else {
      setFill(isNaN(fill) ? "" : fill);
      values.forEach((elem) =>
        elem.forEach((_, index, array) => (array[index] = fill))
      );
    }

    let taken = matrices.map((elem) => elem.name);

    setMatrices([
      ...matrices,
      {
        key: matrices.length,
        name: names.find((elem) => !taken.includes(elem)),
        rows: rows,
        cols: cols,
        values: values,
      },
    ]);
  };

  const [isModalOpen, setModalState] = useState(false);

  return (
    <div className="add-matrix">
      <Select
        setRows={setRows}
        setCols={setCols}
        createMatrix={createMatrix}
        setFill={setFill}
      />
      <button
        onClick={() =>
          isModalOpen ? setModalState(false) : setModalState(true)
        }
        className="custom-button"
      >
        Custom
      </button>
      {isModalOpen && (
        <Modal
          rows={rows}
          setRows={setRows}
          cols={cols}
          setCols={setCols}
          fill={fill}
          updateFill={updateFill}
          createMatrix={createMatrix}
          isModalOpen={isModalOpen}
          setModalState={setModalState}
        />
      )}
    </div>
  );
};

export default AddMatrix;
