import { useState } from "react";
import "./App.css";
import Coin from "./Features/Coin/Coin";
import Counter from "./Features/Counter/Counter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h2 className="capitalize text-xl font-bold text-rose-600">
          React Redux concept Break Down
        </h2>
        <Counter count={count} setCount={setCount} />
        <Coin count={count} />
      </div>
    </>
  );
}

export default App;
