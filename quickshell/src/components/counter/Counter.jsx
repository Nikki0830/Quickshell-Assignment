import React, { useState } from "react";

function Counter() {
  const defaultCounter = 1;
  const MAX_VALUE = Number.MAX_VALUE || 1000;
  const [count, setCounter] = useState(defaultCounter);

  const increaseDecreaseCounter = (type) => {
    if (type == "+") {
      setCounter((p) => (p < 1000 ? p + 1 : 1000));
    } else {
      setCounter((p) => p - 1);
    }
  };

  const handleOnChangeCounterValue = (e) => {
    setCounter(null);
    setCounter((p) => +p + Number(e.target.value));
    // console.log(typeof count);
  };

  return (
    <div className="counter">
      <div className="buttonGroup">
        <button
          className="buttonGroup_btn minus"
          onClick={() => increaseDecreaseCounter(`-`)}
        >
          -
        </button>
        <input
          className="buttonGroup_btn"
          type="number"
          onChange={handleOnChangeCounterValue}
          value={count}
        />
        <button
          className="buttonGroup_btn plus"
          onClick={() => increaseDecreaseCounter(`+`)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
