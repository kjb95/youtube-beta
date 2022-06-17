"use strict";

(function index() {
  fetch("../data/playlist.json")
    .then((response) => response.json())
    .then((data) => {
      let videos = document.getElementById("videos");
      data.playlists.forEach((playlist) => {
        let video = document.createElement("div");
        video.className = "video";
        videos.appendChild(video);

        let link = document.createElement("a");
        video.appendChild(link);
        link.href = "../src/video_play.html" + "?page=" + playlist.id;

        let img = document.createElement("img");
        img.className = "video_img";
        img.src = playlist.img;
        link.appendChild(img);

        let title = document.createElement("div");
        title.className = "video_title";
        title.innerText = playlist.title;
        link.appendChild(title);

        let youtuber = document.createElement("div");
        youtuber.className = "youtuber";
        youtuber.innerText = playlist.youtuber;
        video.appendChild(youtuber);

        let video_information = document.createElement("div");
        video_information.className = "video_information";
        video_information.innerText = playlist.information;
        video.appendChild(video_information);
      });
    });
})();
