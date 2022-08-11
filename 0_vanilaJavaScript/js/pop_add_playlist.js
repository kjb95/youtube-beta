"use strict";

window.resizeTo(350, 400);

function addPlaylist() {
  let randomPlaylist = window.localStorage.getItem("randomPlaylist");
  let sequentialPlaylist = window.localStorage.getItem("sequentialPlaylist");
  let parsedRandomPlaylist = JSON.parse(randomPlaylist);
  let parsedSequentialPlaylist = JSON.parse(sequentialPlaylist);

  let playlist = {
    id: document.getElementById("videoFormVideoId").value,
    img: document.getElementById("videoFormVideoImg").value,
    title: document.getElementById("videoFormVideoTitle").value,
    user_name: document.getElementById("videoFormYoutuber").value,
    description: document.getElementById("videoFormVideoInformation").value,
    subscriber: document.getElementById("videoFormSubscriber").value,
    isExist: true,
    explanation: document.getElementById("videoFormVideoDescription").value,
  };
  parsedRandomPlaylist.playlists.push(playlist);
  parsedSequentialPlaylist.playlists.push(playlist);

  window.localStorage.setItem("randomPlaylist", JSON.stringify(parsedRandomPlaylist));
  window.localStorage.setItem("sequentialPlaylist",JSON.stringify(parsedSequentialPlaylist));

  opener.location.reload();
  window.close();
}

function exit() {
  window.close();
}
