import { useState, useEffect } from 'react';

export const Stopwatch = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const tick = () => setTimeElapsed(timeElapsed + 1);
    const intervalID = setInterval(tick, 1000);
    return () => clearInterval(intervalID);
  }, [timeElapsed, isRunning]);

  return (
    <div className="prose p-2 practice">
      <button
        onClick={() => setIsRunning(true)}
        disabled={isRunning}
      >
        Start
      </button>
      <button
        onClick={() => setIsRunning(false)}
        disabled={!isRunning}
      >
        Pause
      </button>
      <button
        onClick={() => setTimeElapsed(0)}
        disabled={timeElapsed === 0}
      >
        Reset
      </button>
      <h1 className="p-3">{timeElapsed.toString()}</h1>
    </div>
  );
};
