import React from "react";
import { PlaylistModifyButtonImg } from "../../style/styled_component/video_play";

const AddButton = ({ setAddPlaylistModal }) => {
  return <PlaylistModifyButtonImg 
    src="./img/addButton.png" 
    alt="addButton" 
    onClick={event => openAddPlaylistModal(setAddPlaylistModal)}
  />
};

const openAddPlaylistModal = (setAddPlaylistModal) => {
  setAddPlaylistModal(true);
};

export default AddButton;
