import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ReactPlayer from "react-player";
import qs from "qs";

import * as common from "../service/common.js";
import Playlist from "../components/video_play/playlist";

import "../style/common.css";
import "../style/video_play.css";
import "../style/notice.css";
import "../style/playlist.css";

const VideoPlay = () => {
  // window.localStorage.clear();
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const youtbeURL = "https://www.youtube.com/watch?v=" + query.page;

  const [sequentialPlaylist, setSequentialPlaylist] = useState(undefined);
  const [randomPlaylist, setRandomPlaylist] = useState(undefined);

  useEffect(() => {
    common
      .fetchPlaylist()
      .then((data) => common.getJsonPlaylist(data))
      .then((data) => {
        setSequentialPlaylist(data[0]);
        setRandomPlaylist(data[1]);
      });
  }, []);

  if (!sequentialPlaylist || !randomPlaylist) return "";

  return (
    <>
      <aside>
        <section id="playlists">
          <Playlist
            sequentialPlaylist={sequentialPlaylist}
            randomPlaylist={randomPlaylist}
          />
        </section>
        <section id="playlistsButton">
          <input type="hidden" id="isRandom" value="false" />
          <img
            id="randomButton"
            src="./img/randomButton.png"
            alt="randomButton"
          />
          <img id="addButton" src="./img/addButton.png" alt="addButton" />
          <img
            id="deleteButton"
            src="./img/deleteButton.png"
            alt="deleteButton"
          />
        </section>
      </aside>
      <main id="video">
        <section id="notice"></section>
        <section id="youtubePlayer">
          <ReactPlayer
            url={youtbeURL}
            width="100%"
            height="100%"
            playing
            controls
          />
        </section>
        <section>
          <div id="videoTitle"></div>
          <br />
          <div id="videoInformation"></div>
          <br />
        </section>
        <section id="youtuberInformation">
          <br />
          <div id="youtuber"></div>
          <br />
          <div id="subscriber"></div>
          <br />
          <div id="videoDescription"></div>
          <br />
          <div id="viewMore"></div>
          <div id="briefly"></div>
          <br />
        </section>
      </main>
    </>
  );
};

export default VideoPlay;
