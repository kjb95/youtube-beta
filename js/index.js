"use strict";

function loadIndex() {
  fetch("../data/playlist.json")
    .then((response) => response.json())
    .then((data) => {
      data.playList.forEach((item) => {
        let videos = document.getElementById("videos");
        let content = document.createElement("div");
        content.className = "content";
        videos.appendChild(content);

        let link = document.createElement("a");
        content.appendChild(link);
        link.href = "../src/video.html" + "?page=" + item.id;

        let img = document.createElement("img");
        img.className = "video_image";
        img.src = item.image;
        link.appendChild(img);

        let title = document.createElement("div");
        title.className = "video_title";
        title.innerText = item.title;
        link.appendChild(title);

        let youtuber = document.createElement("div");
        youtuber.className = "youtuber";
        youtuber.innerText = item.user_name;
        content.appendChild(youtuber);

        let video_information = document.createElement("div");
        video_information.className = "video_information";
        video_information.innerText = item.information;
        content.appendChild(video_information);
      });
    });
}

loadIndex();
