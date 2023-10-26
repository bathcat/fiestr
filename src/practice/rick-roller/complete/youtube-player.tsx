import { useState } from 'react';
import { YoutubeVideo } from './youtube-video';
import { PlayerState } from './player-state';

interface Props {
  videoId: string;
}

export const YoutubePlayer = ({ videoId }: Props) => {
  const [playerState, setPlayerState] = useState(PlayerState.PLAYING);

  const play = () => setPlayerState(PlayerState.PLAYING);
  const pause = () => setPlayerState(PlayerState.PAUSED);
  const stop = () => setPlayerState(PlayerState.UNSTARTED);

  return (
    <div className="prose p-2 practice">
      <button
        onClick={play}
        // disabled={playerState === PlayerState.PLAYING}
      >
        Start
      </button>
      <button
        onClick={pause}
        // disabled={playerState !== PlayerState.PLAYING}
      >
        Pause
      </button>
      <button
        onClick={stop}
        // disabled={playerState === PlayerState.UNSTARTED}
      >
        Reset
      </button>
      <YoutubeVideo
        videoId={videoId}
        state={playerState}
      />
    </div>
  );
};
