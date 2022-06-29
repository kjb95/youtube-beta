import React from "react";

const AddButton = ({ setAddPlaylistModal }) => {
  return (
    <img
      id="addButton"
      src="./img/addButton.png"
      alt="addButton"
      onClick={(event) => {
        openAddPlaylistModal(setAddPlaylistModal);
        return ;
      }}
    />
  );
};

const openAddPlaylistModal = (setAddPlaylistModal) => {
  setAddPlaylistModal(true);
};

export default AddButton;