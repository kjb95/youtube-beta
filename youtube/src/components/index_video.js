const IndexVideo = ({youtubeId, videoImg, videoTitle, yotuber, videoInformation}) => {
  let youtbeAddress = `/video_play?page=${youtubeId}`;
  let videoImgAddress = `./img/${videoImg}`;

  return (
    <div className='video'>
      <a href={youtbeAddress}>
        <img className='video_img' src={videoImgAddress} alt='video_img' />
        <div className="video_title">{videoTitle}</div>
      </a>
      <div className='youtuber'>{yotuber}</div>
      <div className='video_information'>${videoInformation}</div>
    </div>
  )
}

export default IndexVideo;