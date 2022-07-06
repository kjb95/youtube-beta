import React from "react";
import {
  PlaylistInformationBox,
  PlaylistTitleBox,
  PlaylistYoutuberBox,
  IndexVideoImg,
} from "../../style/styled_component/index";

const IndexVideoElement = ({
  youtubeId,
  videoImg,
  videoTitle,
  yotuber,
  videoInformation,
}) => {
  const youtbeAddress = `/video_play?page=${youtubeId}`;
  const videoImgAddress = `./img/${videoImg}`;

  return (
    <a href={youtbeAddress}>
      <IndexVideoImg src={videoImgAddress} alt="video_img" />
      <PlaylistTitleBox>{videoTitle}</PlaylistTitleBox>
      <PlaylistYoutuberBox>{yotuber}</PlaylistYoutuberBox>
      <PlaylistInformationBox>{videoInformation}</PlaylistInformationBox>
    </a>
  );
};

export default IndexVideoElement;
