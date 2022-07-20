import axios from 'axios';

export const deletePlayList = (checkboxs, playlistDataUpdate, setPlaylistUpdate) => {
  axios.delete('api/playlist', {data: checkboxs})
    .then(() => setPlaylistUpdate(playlistDataUpdate+1));
};