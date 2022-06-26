import React from 'react';

const VideoPlay = () => {
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
          <section id='youtubePlayer'></section>
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
      <footer>
          {/* <script type='text/javascript' src='../js/youtube_API.js'></script>
          <script type='text/javascript' src='../js/video_play.js'></script>
          <script type='text/javascript' src='../js/playlist.js'></script>
          <script type='text/javascript' src='../js/notice.js'></script> */}
      </footer>
    </>
  );
}

export default VideoPlay;