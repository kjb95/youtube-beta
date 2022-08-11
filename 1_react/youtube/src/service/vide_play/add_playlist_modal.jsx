import { getYoutubeData } from "../common";

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

  const youtubeData = await getYoutubeData(id);

  parsedSequentialPlaylist.push(youtubeData);
  parsedRandomPlaylist.push(youtubeData);

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
