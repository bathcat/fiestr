import { useState, useRef } from 'react';

enum RunState {
  Stopped,
  Running,
  Paused,
}

export const Stopwatch = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [runState, setRunState] = useState(RunState.Stopped);
  const timeoutID = useRef(0);

  window.clearTimeout(timeoutID.current);
  
  if (runState === RunState.Running) {
    timeoutID.current = window.setTimeout(
      () => setTimeElapsed(te => te + .01),
      10,
    );
  }

  const stop = () => {
    setTimeElapsed(0);
    setRunState(RunState.Stopped);
  };

  return (
    <div className="prose p-2 practice">
      <button
        onClick={()=>setRunState(RunState.Running)}
        disabled={runState === RunState.Running}
      >
        Start
      </button>
      <button
        onClick={()=>setRunState(RunState.Paused)}
        disabled={runState !== RunState.Running}
      >
        Pause
      </button>
      <button
        onClick={stop}
        disabled={runState === RunState.Stopped}
      >
        Stop
      </button>
      <h1 className="p-3">{timeElapsed.toFixed(3)}</h1>
    </div>
  );
};
