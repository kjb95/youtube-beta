"use strict";

// 플레이 리스트 로딩
playlist();

async function playlist() {
  // window.localStorage.clear();
  removePlaylist();
  let sequentialPlaylist = window.localStorage.getItem("sequentialPlaylist");
  let randomPlaylist = window.localStorage.getItem("randomPlaylist");
  if (sequentialPlaylist == null) {
    sequentialPlaylist = await fetchPlaylist();
    window.localStorage.setItem("sequentialPlaylist", sequentialPlaylist);
    window.localStorage.setItem("randomPlaylist", sequentialPlaylist);
  }

  let isRandom = window.localStorage.getItem("isRandom");
  if (isRandom == null) window.localStorage.setItem("isRandom", false);
  if (isRandom == "true") loadPlaylist(JSON.parse(randomPlaylist));
  else loadPlaylist(JSON.parse(sequentialPlaylist));
};

function removePlaylist() {
  let playlists = document.getElementById("playlists");
  while (playlists.hasChildNodes()) 
    playlists.removeChild(playlists.firstChild);
}

async function fetchPlaylist() {
  return await fetch("../data/playlist.json")
    .then((response) => response.json())
    .then((data) => JSON.stringify(data));
}

function loadPlaylist(data) {
  let playlists = document.getElementById("playlists");
  let url = new URL(window.location.href);

  data.playlists.forEach((playlistData) => {
    if (!playlistData.isExist) return;
    
    let playlist = document.createElement("div");
    if (url.searchParams.get("page") == playlistData.id)
      playlist.className = "current_playlist";
    else playlist.className = "playlist";
    playlists.appendChild(playlist);

    let checkbox = document.createElement("input");
    checkbox.className = "checkbox";
    checkbox.type = "checkbox";
    checkbox.id = playlistData.id;
    playlist.appendChild(checkbox);

    let link = document.createElement("a");
    playlist.appendChild(link);
    link.href = "../src/video_play.html" + "?page=" + playlistData.id;

    let img = document.createElement("img");
    img.className = "video_img";
    img.src = playlistData.img;
    link.appendChild(img);

    let playlist_text = document.createElement("div");
    playlist_text.className = "playlist_text";
    link.appendChild(playlist_text);

    let title = document.createElement("div");
    title.className = "video_title";
    title.innerText = playlistData.title;
    playlist_text.appendChild(title);

    let youtuber = document.createElement("div");
    youtuber.className = "youtuber";
    youtuber.innerText = playlistData.youtuber;
    playlist_text.appendChild(youtuber);

    let information = document.createElement("div");
    information.className = "video_information";
    information.innerText = playlistData.information;
    playlist_text.appendChild(information);
  });
}


// 플레이리스트 제거
(function playlistDeletButton() {
    let deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", deletePlayList);
})();

function deletePlayList(event) {
  let checkboxs = document.querySelectorAll(".checkbox:checked");
  let sequentialPlaylist = window.localStorage.getItem("sequentialPlaylist");
  let randomPlaylist = window.localStorage.getItem("randomPlaylist");
  let parsedRandomPlaylist = JSON.parse(randomPlaylist);
  let parsedSequentialPlaylist  = JSON.parse(sequentialPlaylist);
  let isReload = false;

  checkboxs.forEach((checkbox) => {
    parsedRandomPlaylist.playlists.forEach((prd) => {
      if (prd.id == checkbox.id) {
          prd.isExist = false;
          isReload = true;
      }
    });
    parsedSequentialPlaylist.playlists.forEach((psd) => {
      if (psd.id == checkbox.id) {
          psd.isExist = false;
          isReload = true;
      }
    });
  });

  window.localStorage.setItem("randomPlaylist", JSON.stringify(parsedRandomPlaylist));
  window.localStorage.setItem("sequentialPlaylist", JSON.stringify(parsedSequentialPlaylist));
  playlist();
}


// 플레이리스트 추가
(function playlistAddButton() {
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addPlayList);
})();

function addPlayList(event) {
window.open("../src/pop_add_playlist.html", " _blank", "resizable=yes");
}


// 플레이리스트 랜덤재생
(function playlistRandomButton() {
  let randomButton = document.getElementById("randomButton");
  randomButton.addEventListener("click", randomPlayList);

  let isRandom = window.localStorage.getItem("isRandom");
  if (isRandom == "true") randomButton.style.opacity = 1;
})();

function randomPlayList(event) {
  removePlaylist();
  let isRandom = window.localStorage.getItem("isRandom");
  let sequentialPlaylist = window.localStorage.getItem("sequentialPlaylist");
  let parsedSequentialPlaylist = JSON.parse(sequentialPlaylist);

  if (isRandom == "true") {
      event.target.style.opacity = 0.4;
      window.localStorage.setItem("isRandom", false);
  } else {
      event.target.style.opacity = 1;
      window.localStorage.setItem("isRandom", true);
      combinePlaylist(parsedSequentialPlaylist);
      window.localStorage.setItem("randomPlaylist", JSON.stringify(parsedSequentialPlaylist));
  }
  loadPlaylist(parsedSequentialPlaylist);
}

function combinePlaylist(data) {
  for (let i = 0; i < data.playlists.length; i++) {
      let temp = data.playlists[i];
      let randomNumber = Math.floor(Math.random() * data.playlists.length);
      data.playlists[i] = data.playlists[randomNumber];
      data.playlists[randomNumber] = temp;
  }
}


// 이전 페이지의 스크롤 위치 기억
window.addEventListener("click", () => {
  let playlist = document.getElementById("playlists");
  window.localStorage.setItem("scrollLocation", playlist.scrollTop);
});

window.onload = function () {
  let url = new URL(document.referrer);
  let urls = url.pathname.split("/");
  if (urls[urls.length - 1] != "video_play.html")
    return ;
  
  document.getElementById("playlists").scrollTop = window.localStorage.getItem("scrollLocation");
};