export const fetchPlaylist = async () => {
  return await fetch('/json/playlist.json')
    .then((response) => response.json())
    .then(data => data.playlists);
}

export const getJsonPlaylist = async (data) => {
  if (!data)
    return null;
  let sequentialPlaylist = window.localStorage.getItem("sequentialPlaylist");
  let randomPlaylist = window.localStorage.getItem("randomPlaylist");

  if (sequentialPlaylist === null) {
    sequentialPlaylist = JSON.stringify(data);
    randomPlaylist = JSON.stringify(data);
    window.localStorage.setItem("sequentialPlaylist", JSON.stringify(data));
    window.localStorage.setItem("randomPlaylist", JSON.stringify(data));
  }

  const parsedSequentialPlaylist = JSON.parse(sequentialPlaylist);
  const parsedRandomPlaylist = JSON.parse(randomPlaylist);
  return [parsedSequentialPlaylist, parsedRandomPlaylist];
}

export const getCurrentPlaylist = (sequentialPlaylist, page) => {
  let currentPlaylist;
  sequentialPlaylist.forEach(playlist => {
    if (playlist.id === page)
      currentPlaylist = playlist;
  })
  return currentPlaylist;
}

export const fetchNotice = async () => {
  return await fetch('/json/notice.json')
  .then((response) => response.json())
  .then(data => data.notices);
}

export const setCookie = (name, value, expire) => {
  const currentDay = new Date();
  currentDay.setTime(currentDay.getTime() + expire);
  document.cookie =
    name + "=" + value + "; expires=" + currentDay.toUTCString();
}

export const getCookie = (name) => {
  if (document.cookie === "") return "";

  const cookies = document.cookie.split(";");

  for (let i in cookies) {
    const key = (Number)(cookies[i].split("=")[0].trim());
    const value = cookies[i].split("=")[1].trim();
    if (key === name) return value;
  }
  return "";
}