import { useEffect, useRef } from 'react';
import { PlayerState } from './player-state';

const youtubeScriptID = 'fr-youtube-api';

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }
}

const sleep = (timeout:number):Promise<void>=>
  new Promise(resolve =>{
    setTimeout(() => {
      resolve();
    }, timeout);
  });

const loadYoutubeApi = (
  window: Window = globalThis.window,
): Promise<void> => {
  const existingScriptElement = window.document.getElementById(youtubeScriptID);
  if (existingScriptElement) {
    console.log('Already in there.');
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
  const player = useRef<YT.Player>();
  useEffect(() => {
    loadYoutubePlayer(videoId, playerId.current).then(p =>
      player.current=p,
    );
  }, [videoId]);

  useEffect(() => {
    //TODO: Figure out how to wait for thing to load before trying to play something.
    if(!player.current){
      return;
    }

    if(state===PlayerState.PLAYING){
      player.current?.playVideo();
    }
    else if(state===PlayerState.PAUSED){
      player.current?.pauseVideo();
    }
    else if(state===PlayerState.UNSTARTED){
      player.current?.stopVideo();
    }
  }, [state]);

  return (
    <div>
      <div id={playerId.current}></div>
    </div>
  );
};
