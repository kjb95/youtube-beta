import React, { useState, useEffect } from "react";

import "../style/common.css";
// import "../../style/index.css";

import IndexVideo from "../components/index/index_video";
import * as common from "../service/common.js";

const Index = () => {
  const [playlist, setPlaylist] = useState(undefined);

  useEffect(() => {
    common
      .fetchPlaylist()
      .then((data) => common.getJsonPlaylist(data))
      .then((data) => {
        setPlaylist(data[0]);
      });
  }, []);

  if (!playlist) return "";

  return (
    <main id="videos">
      {playlist.map((playlist) => (
        <li key={playlist.id}>
          <IndexVideo
            playlistName="video"
            youtubeId={playlist.id}
            videoImg={playlist.img}
            videoTitle={playlist.title}
            yotuber={playlist.youtuber}
            videoInformation={playlist.information}
          />
        </li>
      ))}
    </main>
  );
};

export default Index;
