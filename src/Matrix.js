const Matrix = ({ name, values, updateValues, deleteMatrix }) => {
  return (
    <div className="matrix" id={name}>
      <div className="matrix-title">
        {name}
        {deleteMatrix && (
          <button className="delete" id={name} onClick={(e) => deleteMatrix(e)}>
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
  );
};

export default Matrix;
