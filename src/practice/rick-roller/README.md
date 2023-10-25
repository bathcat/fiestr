# Lab: Rick Roller

## Summary

For centuries, [Rickrolling](https://en.wikipedia.org/wiki/Rickrolling) was the favorite prank of emperors and kings. But that hilarity was beyond the means of the vast majority of people unable to afford a surprise [Rick Astley](https://en.wikipedia.org/wiki/Rick_Astley) performance for their friends and colleagues.

Thankfully, the internet age democratized everything, allowing everyday people to trick their friends into hearing [Never Gonna Give You Up](https://en.wikipedia.org/wiki/Never_Gonna_Give_You_Up).

Observe:
![Rickroll in person](/assets/screenshot.rick-roller.png)

For an historical background, watch [this lecture](https://www.youtube.com/watch?v=dQw4w9WgXcQ) on the topic.

### Requirements

The goal here is to write a wrapper for the Youtube API in idiomatic React.

User stories:

1. Auto-play a Youtube video.
2. Add React controls to stop and start playing.

---

### Details

- To get youtube player typings right, you'll have to install them like so:

  ```shell
  npm install @types/youtube
  ```

- For the event global event **onYouTubeIframeAPIReady** declare a global like this:

  ```ts
  declare global {
    interface Window {
      onYouTubeIframeAPIReady?: () => void;
    }
  }
  ```

---

### Reference

- Youtube API:
  - https://developers.google.com/youtube/iframe_api_reference
  - https://developers.google.com/youtube/player_parameters
