const Modal = ({
  rows,
  setRows,
  cols,
  setCols,
  fill,
  updateFill,
  createMatrix,
  setModalState,
}) => {
  return (
    <div className="modal">
      <button onClick={() => setModalState(false)} className="close-button">
        &times;
      </button>
      <div>
        <label htmlFor="rows">Rows : </label>
        <input
          value={rows}
          onChange={(e) =>
            setRows(e.target.value === "" ? "" : Number(e.target.value))
          }
          type="number"
          name="rows"
          id="rows"
        />
      </div>
      <div>
        <label htmlFor="cols">Columns : </label>
        <input
          value={cols}
          onChange={(e) =>
            setCols(e.target.value === "" ? "" : Number(e.target.value))
          }
          type="number"
          name="cols"
          id="cols"
        />
      </div>
      <div>
        <input
          value="i"
          checked={fill === "i"}
          onChange={updateFill}
          type="radio"
          name="fill"
          id="identity"
          disabled={rows !== cols}
        />
        <label htmlFor="identity">Identity</label>
        <input
          value={1}
          checked={fill === "1"}
          onChange={updateFill}
          type="radio"
          name="fill"
          id="fill1"
        />
        <label htmlFor="fill1">Fill 1</label>
        <input
          value={0}
          checked={fill === "0"}
          onChange={updateFill}
          type="radio"
          name="fill"
          id="fill0"
        />
        <label htmlFor="fill0">Fill 0</label>
        <input
          value=""
          checked={fill === ""}
          onChange={updateFill}
          type="radio"
          name="fill"
          id="fillnone"
        />
        <label htmlFor="fillnone">Empty</label>
      </div>
      <button
        onClick={() => {
          setModalState(false);
          createMatrix();
        }}
      >
        OK
      </button>
    </div>
  );
};

export default Modal;
