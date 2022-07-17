import { getYoutubeData } from "../common.js";
import axios from 'axios';

export const inputChange = (event, setId) => {
  setId(event.target.value);
};

export const addPlaylist = async (
  id,
  setAddPlaylistModal,
  setSequentialPlaylist,
  setRandomPlaylist,
  setId
) => {
  const sequentialPlaylist = window.localStorage.getItem("sequentialPlaylist");
  const randomPlaylist = window.localStorage.getItem("randomPlaylist");
  const parsedSequentialPlaylist = JSON.parse(sequentialPlaylist);
  const parsedRandomPlaylist = JSON.parse(randomPlaylist);
  const playlist = await getYoutubeData(id);

  await axios.post('/api/playlist', playlist);
  parsedSequentialPlaylist.push(playlist);
  parsedRandomPlaylist.push(playlist);

  window.localStorage.setItem(
    "sequentialPlaylist",
    JSON.stringify(parsedSequentialPlaylist)
  );
  window.localStorage.setItem(
    "randomPlaylist",
    JSON.stringify(parsedRandomPlaylist)
  );

  setSequentialPlaylist(parsedSequentialPlaylist);
  setRandomPlaylist(parsedRandomPlaylist);
  setAddPlaylistModal(false);
  setId("");
};

export const closeModal = (setAddPlaylistModal, setId) => {
  setAddPlaylistModal(false);
  setId("");
};
