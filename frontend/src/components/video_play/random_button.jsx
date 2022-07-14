import React from 'react';
import { PlaylistRandomButtonImg } from '../../style/styled_component/video_play';
import { randomPlay } from '../../service/vide_play/random_button';

const RandomButton = ({setSequentialPlaylist, setRandomPlaylist}) => {
  const isRandom = window.localStorage.getItem('isRandom');

  return <PlaylistRandomButtonImg
    src='./img/randomButton.png'
    alt='randomButton'
    onClick={ event => { randomPlay(event, setSequentialPlaylist, setRandomPlaylist); }}
    isRandom = {isRandom}
  />
}

export default RandomButton;
