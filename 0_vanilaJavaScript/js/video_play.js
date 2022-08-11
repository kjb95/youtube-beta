"use strict";

(function loadVideo() {
  let data = JSON.parse(window.localStorage.getItem("sequentialPlaylist"));
  let url = new URL(window.location.href);
  data.playlists.forEach(playlist => {
    if (url.searchParams.get("page") != playlist.id) return;

    document.getElementById("videoTitle").innerText = playlist.title;
    document.getElementById("videoInformation").innerText = playlist.information;
    document.getElementById("youtuber").innerText = playlist.youtuber;
    document.getElementById("subscriber").innerText = playlist.subscriber;
    document.getElementById("videoDescription").innerText = playlist.description;

    let view_more = document.getElementById("viewMore");
    view_more.innerText = "더보기";
    view_more.addEventListener("click", view_more_func);

    let briefly = document.getElementById("briefly");
    briefly.innerText = "간략히";
    briefly.addEventListener("click", briefly_func);
  });
})();

function view_more_func() {
  document.getElementById("videoDescription").style.display = "inline";
  document.getElementById("viewMore").style.display = "none";
  document.getElementById("briefly").style.display = "block";
}

function briefly_func() {
  document.getElementById("videoDescription").style.display = "-webkit-box";
  document.getElementById("viewMore").style.display = "block";
  document.getElementById("briefly").style.display = "none";
}