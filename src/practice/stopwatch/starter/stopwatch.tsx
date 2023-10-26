export const Stopwatch = () => {
  const timeElapsed=0;
  return (
    <div className="prose practice">
      <button>Start</button>
      <button>Pause</button>
      <button>Stop</button>
      <h1>{timeElapsed.toFixed(3)}</h1>
    </div>
  );
};
