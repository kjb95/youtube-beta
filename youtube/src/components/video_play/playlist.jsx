import React from 'react';

import IndexVideo from '../index/index_video';

const Playlist = ({sequentialPlaylist, randomPlaylist}) => {
  let isRandom = window.localStorage.getItem("isRandom");
 
  if (isRandom == null) 
    window.localStorage.setItem("isRandom", false);

  if (isRandom === "true")
    return loadPlaylist(randomPlaylist);
  return loadPlaylist(sequentialPlaylist);
}

function loadPlaylist(data) {
  let url = new URL(window.location.href);
  
  return data.map((playlistElement) => {
    if (!playlistElement.isExist)
      return '';

    let playlistName = 'playlist';
    if (url.searchParams.get("page") === playlistElement.id)
      playlistName = 'current_playlist';

    return <li key={playlistElement.id}>
      <IndexVideo
        playlistName={playlistName} 
        youtubeId={playlistElement.id}
        videoImg={playlistElement.img} 
        videoTitle={playlistElement.title} 
        yotuber={playlistElement.youtuber} 
        videoInformation={playlistElement.information}
        isCheckBox='true'
      />
    </li>
  })
}

export default Playlist;