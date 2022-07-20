import { getYoutubeData } from "../common.js";
import axios from 'axios';

export const inputChange = (event, setId) => {
  setId(event.target.value);
};

export const addPlaylist = (
  id,
  setAddPlaylistModal,
  setId
) => {
  getYoutubeData(id).then(playlist => {
    axios.post('/api/playlist', playlist).then(() => {
      setAddPlaylistModal(false);
      setId("");
    });
  });
};

export const closeModal = (setAddPlaylistModal, setId) => {
  setAddPlaylistModal(false);
  setId("");
};
