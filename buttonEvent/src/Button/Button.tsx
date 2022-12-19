import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <div id="button">
      <p>Button Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        CLICK ME!
      </button>
    </div>
  );
};

export default Button;
