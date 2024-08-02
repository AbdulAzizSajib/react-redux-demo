// import { useState } from "react";
function Counter({count, setCount}) {
  // const [count, setCount] = useState(0);
  return (
    <div className="mt-20 flex items-center gap-2">
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {/* <p>Count: {count}</p> */}

      <button
        className="btn"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
