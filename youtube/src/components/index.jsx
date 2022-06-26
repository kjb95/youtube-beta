import React from 'react';

import IndexVideo from './index_video';
import useAsync from '../hooks/useAsync';
import "../css/common.css";
import "../css/index.css";

const getPlaylist = async () => {
  return await fetch('/json/playlist.json')
    .then((response) => response.json())
    .then(data => data.playlists);
} 

const Index = () => {
  const [state] = useAsync(getPlaylist);
  const {loading, data, error} = state;

  if (loading)
    return <div>Loading</div>;
  if (error) 
    return <div>Error</div>;
  if (!data)
    return <div>No Data</div>;
  
  return (
    <main id="videos">
      {data.map((playlist) => {
        return <IndexVideo youtubeId={playlist.id} videoImg={playlist.img} videoTitle={playlist.title} yotuber={playlist.youtuber} videoInformation={playlist.information} />
      })}
    </main>
  );
}

export default Index;