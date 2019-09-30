import React, { useState } from "react";
import { css } from "emotion";

const showCount = css`
  font-size: 400%;
  color: #09d3ac;
`;

const buttons = css`
  display: flex;

  & > button {
    width: 2em;
    background: none;
    border: 3px solid #09d3ac;
    font-size: 120%;
    color: white;
  }

  & > button + button {
    margin-left: 15px;
  }
`;

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={showCount}>{count}</div>
      <div className={buttons}>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </>
  );
};

export default Counter;
