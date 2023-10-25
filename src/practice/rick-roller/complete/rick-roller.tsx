import { YoutubePlayer } from './youtube-player';

export const RickRoller = () => (
  <>
    <YoutubePlayer videoId="dQw4w9WgXcQ" />
    {/* TODO: Add a sleep() to wait if the youtube api is already being loaded.
    <YoutubePlayer videoId="7Ep4B1LuRnE" /> */}
  </>
);
