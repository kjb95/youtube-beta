import React from 'react';

const IndexVideo = ({playlistName ,youtubeId, videoImg, videoTitle, yotuber, videoInformation}) => {
  let youtbeAddress = `/video_play?page=${youtubeId}`;
  let videoImgAddress = `./img/${videoImg}`;

  return <div className={playlistName}>
    <input className="checkbox" type="checkbox" id={youtubeId}></input>
    <a href={youtbeAddress}>
      <img className="video_img" src={videoImgAddress} alt='video_img'/>
      <div className="playlist_text">
        <div className="video_title">{videoTitle}</div>
        <div className="youtuber">{yotuber}</div>
        <div className="video_information">{videoInformation}</div>
      </div>
    </a>
  </div>
}

export default IndexVideo;