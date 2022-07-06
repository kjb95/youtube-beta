import React from "react";
import {
  PlaylistAnchorBox,
  PlaylistBox,
  PlaylistVideoImg,
} from "../../style/styled_component/video_play";
import {
  PlaylistInformationBox,
  PlaylistTitleBox,
  PlaylistYoutuberBox,
} from "../../style/styled_component/index";

const PlaylistElement = ({
  playlistName,
  youtubeId,
  videoImg,
  videoTitle,
  yotuber,
  videoInformation,
  checkboxChange = null,
}) => {
  const youtbeAddress = `/video_play?page=${youtubeId}`;
  const videoImgAddress = `./img/${videoImg}`;

  return <PlaylistBox className={playlistName}>
    <input
      type="checkbox"
      id={youtubeId}
      name={youtubeId}
      onClick={checkboxChange}
    />
    <PlaylistAnchorBox playlistName={playlistName}>
      <a href={youtbeAddress}>
        <PlaylistVideoImg src={videoImgAddress} alt="video_img" />
        <div>
          <PlaylistTitleBox>{videoTitle}</PlaylistTitleBox>
          <PlaylistYoutuberBox>{yotuber}</PlaylistYoutuberBox>
          <PlaylistInformationBox>{videoInformation}</PlaylistInformationBox>
        </div>
      </a>
    </PlaylistAnchorBox>
  </PlaylistBox>
};

export default PlaylistElement;
