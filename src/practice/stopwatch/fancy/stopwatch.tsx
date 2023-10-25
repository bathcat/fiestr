import { useState, useEffect } from 'react';

enum RunState {
  Stopped,
  Running,
  Paused,
}

export const Stopwatch = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [runState, setRunState] = useState(RunState.Stopped);

  const run = () => setRunState(RunState.Running);
  const pause = () => setRunState(RunState.Paused);
  const stop = () => {
    setRunState(RunState.Stopped);
    setTimeElapsed(0);
  };

  useEffect(() => {
    if (runState !== RunState.Running) {
      return;
    }
    const intervalID = setInterval(() => setTimeElapsed(timeElapsed + 1), 1000);
    return () => clearInterval(intervalID);
  }, [timeElapsed, runState]);

  return (
    <div className="prose p-2 practice">
      <button
        onClick={run}
        disabled={runState === RunState.Running}
      >
        Start
      </button>
      <button
        onClick={pause}
        disabled={runState !== RunState.Running}
      >
        Pause
      </button>
      <button
        onClick={stop}
        disabled={runState === RunState.Stopped}
      >
        Reset
      </button>
      <h1 className="p-3">{timeElapsed.toString()}</h1>
    </div>
  );
};
