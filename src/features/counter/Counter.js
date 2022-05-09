import { useStore } from "../../app/store";

import React from "react";

const Counter = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const incrementByAmount = useStore((state) => state.incrementByAmount);
  const decrement = useStore((state) => state.decrement);
  const reset = useStore((state) => state.reset);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={() => incrementByAmount(5)}>incrementByAmount</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
