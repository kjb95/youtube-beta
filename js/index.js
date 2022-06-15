'use strict';

function loadIndex() {
  fetch("../data/playList.json")
    .then(response => response.json())
    .then(data => {
        data.playList.forEach(item => {
          let contents = document.getElementById("contents");
          let content = document.createElement('div');
          content.className = "content";
          contents.appendChild(content);

          let link = document.createElement('a');
          content.appendChild(link);
          link.href= "../src/video.html" + "?page="+item.id;

          let img = document.createElement('img');
          img.className="content_image";
          img.src=item.image;
          link.appendChild(img);

          let title = document.createElement('div');
          title.className = "content_title";
          title.innerText = item.title;
          link.appendChild(title);

          let content_user_name = document.createElement('div');
          content_user_name.className="content_user_name";
          content_user_name.innerText = item.user_name;
          content.appendChild(content_user_name);

          let content_description = document.createElement('div');
          content_description.className="content_description";
          content_description.innerText = item.description;
          content.appendChild(content_description);
        });
    });
}

loadIndex();