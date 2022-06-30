import React from "react";

const DeleteButton = ({checkboxs, setSequentialPlaylist, setRandomPlaylist}) => {
  return (
    <img
      id="deleteButton"
      src="./img/deleteButton.png"
      alt="deleteButton"
      onClick={(event) => {
        deletePlayList(checkboxs, setSequentialPlaylist, setRandomPlaylist);
      }}
    />
  );
};

const deletePlayList = (checkboxs, setSequentialPlaylist, setRandomPlaylist) => {
  const sequentialPlaylist = window.localStorage.getItem("sequentialPlaylist");
  const randomPlaylist = window.localStorage.getItem("randomPlaylist");
  const parsedRandomPlaylist = JSON.parse(randomPlaylist);
  const parsedSequentialPlaylist = JSON.parse(sequentialPlaylist);
  
  parsedSequentialPlaylist.forEach(pl => {
    if(checkboxs[pl.id] && checkboxs[pl.id] === true)
      pl.isExist = false;
  })
  parsedRandomPlaylist.forEach(pl => {
    if (checkboxs[pl.id] && checkboxs[pl.id] === true)
      pl.isExist = false;
  });

  window.localStorage.setItem(
    "randomPlaylist",
    JSON.stringify(parsedRandomPlaylist)
  );
  window.localStorage.setItem(
    "sequentialPlaylist",
    JSON.stringify(parsedSequentialPlaylist)
  );

  setSequentialPlaylist(parsedSequentialPlaylist);
  setRandomPlaylist(parsedRandomPlaylist);
};

export default DeleteButton;
