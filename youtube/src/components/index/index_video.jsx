import React from "react";
// import { CheckboxContext } from "../../service/create_context";

const IndexVideo = ({
  playlistName,
  youtubeId,
  videoImg,
  videoTitle,
  yotuber,
  videoInformation,
  isCheckbox,
  checkboxChange=null
}) => {
  const youtbeAddress = `/video_play?page=${youtubeId}`;
  const videoImgAddress = `./img/${videoImg}`;

  return (
    <div className={playlistName}>
      {isCheckbox === "true" && (
        <input
          className="checkbox"
          type="checkbox"
          id={youtubeId}
          name={youtubeId}
          onClick={checkboxChange}
        ></input>
      )}
      <a href={youtbeAddress}>
        <img className="video_img" src={videoImgAddress} alt="video_img" />
        <div className="playlist_text">
          <div className="video_title">{videoTitle}</div>
          <div className="youtuber">{yotuber}</div>
          <div className="video_information">{videoInformation}</div>
        </div>
      </a>
    </div>
  );
};

export default IndexVideo;
