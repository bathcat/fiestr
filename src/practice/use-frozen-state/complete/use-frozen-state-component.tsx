import { useFrozenState } from './use-frozen-state';

export const UseFrozenStateComponent = () => {
  const [count, setCount] = useFrozenState(1);
  const handleClick = () => {
    setCount(count.content + 1);
  };
  return (
    <div className="prose p-2 practice">
      <h1>Count: {count.content}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
