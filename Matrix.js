const Matrix = ({
  name,
  values,
  updateValues,
  deleteMatrix,
  addRowCol,
  notAnswer,
}) => {
  return (
    <div className="matrix-whole">
      <div className="matrix-outer">
        <div className="matrix" id={name}>
          <div className="matrix-title">
            <p className="matrix-name">{name}</p>
            {deleteMatrix && (
              <button
                className="delete"
                id={name}
                onClick={(e) => deleteMatrix(e)}
              >
                &times;
              </button>
            )}
          </div>
          <div className="values">
            {values.map((elem, index) => (
              <div key={index} className="row">
                {elem.map((elem1, index1) => {
                  return (
                    <input
                      value={elem1}
                      className="cell"
                      key={index + index1}
                      matname={name}
                      id={index + "-" + index1}
                      r={index}
                      c={index1}
                      type="number"
                      onChange={(e) => {
                        if (updateValues) {
                          updateValues(e);
                        }
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        {notAnswer && (
          <div className="outer right">
            <button
              mat={name}
              className="outer-btn"
              id="add-col"
              onClick={(e) => addRowCol(e)}
            >
              +
            </button>
            <button
              mat={name}
              className="outer-btn"
              id="rmv-col"
              onClick={(e) => addRowCol(e)}
            >
              &minus;
            </button>
          </div>
        )}
      </div>
      {notAnswer && (
        <div className="outer bottom">
          <button
            mat={name}
            className="outer-btn"
            id="rmv-row"
            onClick={(e) => addRowCol(e)}
          >
            &minus;
          </button>
          <button
            mat={name}
            className="outer-btn"
            id="add-row"
            onClick={(e) => addRowCol(e)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Matrix;
