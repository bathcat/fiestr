import { useEffect, useRef } from 'react';

const youtubeScriptID = 'fr-youtube-api';

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }
}

const loadYoutubeApi = (
  window: Window = globalThis.window,
): Promise<void> => {
  const existingScriptElement = window.document.getElementById(youtubeScriptID);
  if (existingScriptElement) {
    return Promise.resolve();
  }

  const scriptElement = window.document.createElement('script');
  scriptElement.id = youtubeScriptID;
  scriptElement.src = 'https://www.youtube.com/iframe_api';

  const firstScriptElement = window.document.getElementsByTagName('script')[0];
  firstScriptElement!.parentNode!.insertBefore(
    scriptElement,
    firstScriptElement,
  );
  const oldHandler = window.onYouTubeIframeAPIReady;
  return new Promise(resolve => {
    window.onYouTubeIframeAPIReady = () => {
      resolve();
      window.onYouTubeIframeAPIReady = oldHandler;
    };
  });
};

const loadYoutubePlayer = async (
  videoId: string,
  playerId: string,
): Promise<YT.Player> => {
  await loadYoutubeApi();
  return new Promise(resolve => {
    const player:YT.Player = new YT.Player(playerId, {
      videoId,
      events: { onReady: () => resolve(player) },
    });
  });
};

interface YoutubeVideoProps {
  state?: YT.PlayerState;
  videoId: string;
}

const getRandomPlaceholderId = () =>
  `fr-youtube-${Math.floor(Math.random() * 10000)}`;

export const YoutubeVideo = ({ state, videoId }: YoutubeVideoProps) => {
  const playerId = useRef(getRandomPlaceholderId());
  useEffect(() => {
    loadYoutubePlayer(videoId, playerId.current).then(player =>
      player.playVideo(),
    );
  }, [videoId]);

  return (
    <div>
      <div id={playerId.current}></div>
    </div>
  );
};
