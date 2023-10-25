import { useState } from 'react';

interface State<T>{
  value:T;
}

export const UseFrozenStateComponent = () => {
  const [count,] = useState<State<number>>({value:1});
  const handleClick = () => {
    count.value = count.value + 1;
  };
  return (
    <div className="prose p-2 practice">
      <h1>Count: {count.value}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
