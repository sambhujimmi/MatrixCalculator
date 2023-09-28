const Keyboard = ({ matrices, answer, expression, setExpression }) => {
  return (
    <div className="keyboard">
      <div className="matrix-keys">
        {matrices.map((elem, index) => (
          <button
            className="key"
            onClick={() => setExpression(expression + elem.name)}
            key={index}
          >
            {elem.name}
          </button>
        ))}
        {answer.length && (
          <button
            className="key"
            onClick={() => setExpression(expression + "ans")}
          >
            Ans
          </button>
        )}
      </div>
      <div className="num-keys">
        <div className="nums">
          {[...Array(10)].map((_, index) => (
            <button
              className="key"
              onClick={() => setExpression(expression + index)}
              key={index}
            >
              {index}
            </button>
          ))}
        </div>
        <div className="num-op">
          {[".", "(", ")", "x", "+", "-", "="].map((elem, index) => (
            <button
              className="key"
              onClick={() => setExpression(expression + elem)}
              key={index}
            >
              {elem}
            </button>
          ))}
        </div>
      </div>
      <div className="op-keys"></div>
    </div>
  );
};

export default Keyboard;
