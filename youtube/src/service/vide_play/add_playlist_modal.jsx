export const inputChange = (event, inputs, setInputs) => {
  const { value, name } = event.target;
  setInputs({ ...inputs, [name]: value });
};

export const addPlaylist = (
  inputs,
  setAddPlaylistModal,
  setSequentialPlaylist,
  setRandomPlaylist,
  setInputs
) => {
  const sequentialPlaylist =
    window.localStorage.getItem("sequentialPlaylist");
  const randomPlaylist = window.localStorage.getItem("randomPlaylist");
  const parsedSequentialPlaylist = JSON.parse(sequentialPlaylist);
  const parsedRandomPlaylist = JSON.parse(randomPlaylist);

  parsedSequentialPlaylist.push(inputs);
  parsedRandomPlaylist.push(inputs);

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
  setInputs({
    id: "",
    img: "",
    title: "",
    youtuber: "",
    information: "",
    subscriber: "",
    isExist: true,
    description: "",
  });
};

export const closeModal = (setAddPlaylistModal, setInputs) => {
  setAddPlaylistModal(false);
  setInputs({
    id: "",
    img: "",
    title: "",
    youtuber: "",
    information: "",
    subscriber: "",
    isExist: true,
    description: "",
  });
};