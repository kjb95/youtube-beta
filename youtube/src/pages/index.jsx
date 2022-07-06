import React, { useState, useEffect } from "react";

import "../style/css/common.css";

import * as common from "../service/common.js";
import { IndexVideoMain } from "../style/styled_component/index";
import IndexVideoElement from "../components/index/index_video_element";

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

  return <IndexVideoMain>
    {playlist.map((playlist) => (
      <li key={playlist.id}>
        <IndexVideoElement
          youtubeId={playlist.id}
          videoImg={playlist.img}
          videoTitle={playlist.title}
          yotuber={playlist.youtuber}
          videoInformation={playlist.information}
        />
      </li>
    ))}
  </IndexVideoMain>
};

export default Index;
