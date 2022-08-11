import React, { useState, useEffect } from "react";

import "../style/css/common.css";

import { getJsonPlaylist } from "../service/common";
import { IndexVideoMain } from "../style/styled_component/index";

import IndexVideoElement from "../components/index/index_video_element";
import { getYoutubeDataList } from "../service/common";

const Index = () => {
  const [playlist, setPlaylist] = useState(undefined);

  useEffect(() => {
    getYoutubeDataList().then((res) => {
      setPlaylist(getJsonPlaylist(res)[0]);
    });
  }, []);

  if (!playlist) return "";

  return (
    <IndexVideoMain>
      {playlist.map((playlist) => {
        if (!playlist.isExist)
          return '';
        return <li key={playlist.id}>
          <IndexVideoElement
            id={playlist.id}
            title={playlist.title}
            channelTitle={playlist.channelTitle}
            viewCount={playlist.viewCount}
            publishedAt={playlist.publishedAt}
          />
        </li>
      })}
    </IndexVideoMain>
  );
};

export default Index;
