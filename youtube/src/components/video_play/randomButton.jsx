import React from 'react';

const RandomButton = ({setSequentialPlaylist, setRandomPlaylist}) => {
  return <img 
    id='randomButton'
    src='./img/randomButton.png'
    alt='randomButton'
    onClick={
      event => {
        randomPlay(event, setSequentialPlaylist, setRandomPlaylist);
      }
    }
  />
}

const randomPlay = (event, setSequentialPlaylist, setRandomPlaylist) => {
  const isRandom = window.localStorage.getItem('isRandom');

  if (isRandom === 'true')
    event.target.style.opacity = 1;

  let sequentialPlaylist = window.localStorage.getItem('sequentialPlaylist');
  let parsedSequentialPlaylist = JSON.parse(sequentialPlaylist);

  if (isRandom === 'true') {
    event.target.style.opacity = 0.4;
    window.localStorage.setItem('isRandom', false);
    setSequentialPlaylist(parsedSequentialPlaylist);
  } else {
      event.target.style.opacity = 1;
      window.localStorage.setItem('isRandom', true);
      parsedSequentialPlaylist = combinePlaylist(parsedSequentialPlaylist);
      window.localStorage.setItem('randomPlaylist', JSON.stringify(parsedSequentialPlaylist));
      setRandomPlaylist(parsedSequentialPlaylist);
  }
}

const combinePlaylist = (data) => {
  for (let i = 0; i < data.length; i++) {
      let temp = data[i];
      let randomNumber = Math.floor(Math.random() * data.length);
      data[i] = data[randomNumber];
      data[randomNumber] = temp;
  }
  return data;
}

export default RandomButton;
