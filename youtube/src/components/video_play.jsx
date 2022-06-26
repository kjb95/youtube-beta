import React from 'react';
import {useLocation} from 'react-router';
import ReactPlayer from 'react-player'
import qs from 'qs';

const VideoPlay = () => {
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const youtbeURL = 'https://www.youtube.com/watch?v='+query.page;

  return (
    <>
      <aside>
          <section id='playlists'></section>
          <section id='playlistsButton'>
              <input type='hidden' id='isRandom' value='false' />
              <img id='randomButton' src='./img/randomButton.png' alt='randomButton' />
              <img id='addButton' src='./img/addButton.png' alt='addButton' />
              <img id='deleteButton' src='./img/deleteButton.png' alt='deleteButton' />
          </section>
      </aside>
      <main id='video'>
          <section id='notice'></section>
          <section id='youtubePlayer'>
            <ReactPlayer url={youtbeURL} playing controls/>
          </section>
          <section>
              <div id='videoTitle'></div><br/>
              <div id='videoInformation'></div><br/>
          </section>
          <section id='youtuberInformation'><br/>
              <div id='youtuber'></div><br/>
              <div id='subscriber'></div><br/>
              <div id='videoDescription'></div><br/>
              <div id='viewMore'></div>
              <div id='briefly'></div><br/>
          </section>
      </main>
    </>
  );
}

export default VideoPlay;