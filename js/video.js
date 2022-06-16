"use strict";

async function loadPlayList() {
  // window.localStorage.clear();
  let playLists = window.localStorage.getItem("playLists");
  let sequentialPlayLists = window.localStorage.getItem("sequentialPlayLists");
  if (playLists == null) {
    playLists = await fetchData();
    window.localStorage.setItem("sequentialPlayLists", playLists);
  }

  let isRandom = window.localStorage.getItem("isRandom");
  if (isRandom != "true") {
    window.localStorage.setItem("isRandom", false);
    loadData(JSON.parse(sequentialPlayLists));
  } else {
    document.getElementById("randomButton").style.opacity = 1;
    loadData(JSON.parse(playLists));
  }
}

async function fetchData() {
  let ret;
  await fetch("../data/playlist.json")
    .then((response) => response.json())
    .then((data) => JSON.stringify(data))
    .then((data) => {
      window.localStorage.setItem("playLists", data);
      ret = data;
    });

  return ret;
}

function loadData(data) {
  let playLists = document.getElementById("playLists");
  let url = new URL(window.location.href);

  data.playList.forEach((item) => {
    if (!item.isExist) return;

    let playList = document.createElement("div");
    if (item.id == url.searchParams.get("page"))
      playList.className = "current_playlist";
    else playList.className = "playlist";
    playLists.appendChild(playList);

    let checkbox = document.createElement("input");
    checkbox.className = "checkbox";
    checkbox.type = "checkbox";
    checkbox.id = item.id;
    playList.appendChild(checkbox);

    let link = document.createElement("a");
    playList.appendChild(link);
    link.href = "../src/video.html" + "?page=" + item.id;

    let img = document.createElement("img");
    img.className = "video_image";
    img.src = item.image;
    link.appendChild(img);

    let video_text = document.createElement("div");
    video_text.className = "video_text";
    link.appendChild(video_text);

    let title = document.createElement("div");
    title.className = "video_title";
    title.innerText = item.title;
    video_text.appendChild(title);

    let youtuber = document.createElement("div");
    youtuber.className = "youtuber";
    youtuber.innerText = item.user_name;
    video_text.appendChild(youtuber);

    let video_information = document.createElement("div");
    video_information.className = "video_information";
    video_information.innerText = item.description;
    video_text.appendChild(video_information);
  });
}

loadPlayList();

let explanation;

function loadVideo() {
  let data = JSON.parse(window.localStorage.getItem("playLists"));
  let url = new URL(window.location.href);
  data.playList.forEach((item) => {
    if (item.id != url.searchParams.get("page")) return;

    let title = document.getElementById("videoTitle");
    title.innerText = item.title;

    let videoInformation = document.getElementById("videoInformation");
    videoInformation.innerText = item.description;

    let youtuber = document.getElementById("youtuber");
    youtuber.innerText = item.user_name;

    let subscriber = document.getElementById("subscriber");
    subscriber.innerText = item.subscriber;

    explanation = document.getElementById("videoDescription");
    explanation.innerText = item.explanation;

    let view_more = document.getElementById("viewMore");
    view_more.innerText = "더보기";
    view_more.addEventListener("click", view_more_func);

    let briefly = document.getElementById("briefly");
    briefly.innerText = "간략히";
    briefly.addEventListener("click", briefly_func);
  });
}

function view_more_func() {
  explanation.style.overflow = "visible";
  explanation.style.display = "inline";
  view_more.style.visibility = "hidden";
  briefly.style.visibility = "visible";
}

function briefly_func() {
  explanation.style.overflow = "hidden";
  explanation.style.display = "-webkit-box";
  view_more.style.visibility = "visible";
  briefly.style.visibility = "hidden";
}

loadVideo();

window.addEventListener("click", () => {
  let playList = document.getElementById("playLists");
  window.localStorage.setItem("playListLocation", playList.scrollTop);
});

window.onload = function () {
  let playList = document.getElementById("playLists");
  let url = new URL(document.referrer);
  let urls = url.pathname.split("/");

  playList.scrollTop = window.localStorage.getItem("playListLocation");

  if (urls[urls.length - 1] != "video.html") playList.scrollTop = 0;
};

function playListDeletButton() {
  let deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", deletePlayList);
}

function deletePlayList(event) {
  let checkboxs = document.querySelectorAll(".checkbox:checked");
  let data = window.localStorage.getItem("playLists");
  let parsedData = JSON.parse(data);
  let sequentialData = window.localStorage.getItem("sequentialPlayLists");
  let parsedSequentialData = JSON.parse(sequentialData);
  let isReload = false;

  checkboxs.forEach((checkbox) => {
    parsedData.playList.forEach((pd) => {
      if (pd.id == checkbox.id) {
        pd.isExist = false;
        isReload = true;
      }
    });
    parsedSequentialData.playList.forEach((psd) => {
      if (psd.id == checkbox.id) {
        psd.isExist = false;
        isReload = true;
      }
    });
  });

  window.localStorage.setItem("playLists", JSON.stringify(parsedData));
  window.localStorage.setItem(
    "sequentialPlayLists",
    JSON.stringify(parsedSequentialData)
  );

  // for(let i=0 ;i<parsedData.playList.length; i++) {
  //   checkboxs.forEach(checkbox => {

  //     console.log(checkbox.nextElementSibling.id);

  //     let id = checkbox.id;

  //     console.log("id : ", id);
  //     if (parsedData.playList[i].id == checkbox.id) {
  //       parsedData.playList[i].isExist = false;
  //       isReload = true;
  //     }
  //     if (parsedSequentialData.playList[i].id == checkbox.id) {
  //       parsedSequentialData.playList[i].isExist = false;
  //       isReload = true;
  //     }
  //   })
  // }
  // window.localStorage.setItem("playLists", JSON.stringify(parsedData));

  if (isReload) location.reload();
}

playListDeletButton();

function playListAddButton() {
  let addButton = document.getElementById("addButton");
  addButton.addEventListener("click", addPlayList);
}

function addPlayList(event) {
  window.open("../src/add_video_form.html", " _blank", "resizable=yes");
}

playListAddButton();

function playListRandomButton() {
  let randomButton = document.getElementById("randomButton");
  randomButton.addEventListener("click", randomPlayList);
}

function randomPlayList(event) {
  removePlayList();
  let isRandom = window.localStorage.getItem("isRandom");
  let data = window.localStorage.getItem("sequentialPlayLists");
  let parsedData = JSON.parse(data);

  if (isRandom == "true") {
    event.target.style.opacity = 0.4;
    window.localStorage.setItem("isRandom", false);
    loadData(parsedData);
  } else {
    event.target.style.opacity = 1;
    window.localStorage.setItem("isRandom", true);
    combineData(parsedData);
    window.localStorage.setItem("playLists", JSON.stringify(parsedData));
    loadData(parsedData);
  }
}

function loadRandomPlayList() {
  let data = window.localStorage.getItem("playLists");
  let parsedData = JSON.parse(data);
  combineData(parsedData);
  window.localStorage.setItem("playLists", JSON.stringify(parsedData));
  loadData(parsedData);
}

function combineData(data) {
  for (let i = 0; i < data.playList.length; i++) {
    let temp = data.playList[i];
    let randomNumber = Math.floor(Math.random() * data.playList.length);
    data.playList[i] = data.playList[randomNumber];
    data.playList[randomNumber] = temp;
  }
}

function removePlayList() {
  let playLists = document.getElementById("playLists");
  while (playLists.hasChildNodes()) playLists.removeChild(playLists.firstChild);
}

playListRandomButton();

// function fetchNotice (){
//   fetch("../data/notice.json")
//     .then(response => response.json())
//     .then(data => {
//       console.log("notice : ",data);
//       let notices = document.getElementById("notice");
//       let index = -1;

//       data.notice.forEach(item => {
//         let noticeName = "notice"+(++index);
//         if (getCookie(noticeName) != "")
//           return ;
//         let notice = document.createElement('div');
//         notice.id = noticeName;
//         notices.appendChild(notice);

//         let close_button = document.createElement('img');
//         close_button.className="close_button";
//         close_button.src="../images/deleteButton.png";
//         notice.appendChild(close_button);
//         close_button.addEventListener('click', closePopup);

//         let popupContent = document.createElement('div');
//         notice.appendChild(popupContent);

//         let img = document.createElement('img');
//         img.src = item.img;
//         img.className ="notice_image";
//         popupContent.appendChild(img);

//         let title = document.createElement('h3');
//         title.innerText = item.title;
//         popupContent.appendChild(title);

//         let content = document.createElement('div');
//         content.innerText = item.contents;
//         popupContent.appendChild(content);

//         let checkbox = document.createElement('input');
//         checkbox.type = "checkbox";
//         checkbox.className = "do_not_see_today";
//         notice.appendChild(checkbox);

//         let text = document.createElement('span');
//         text.innerText = "오늘 하루 보지 않기";
//         notice.appendChild(text);
//       })
//     })
// }

function fetchNotice() {
  fetch("../data/notice.xml")
    .then((response) => response.text())
    .then((data) => {
      let domParser = new DOMParser();
      let notice = domParser
        .parseFromString(data, "text/xml")
        .getElementsByTagName("notice");
      let notices = document.getElementById("notice");
      let index = -1;

      for (let item of notice) {
        let noticeName = "notice" + ++index;
        if (getCookie(noticeName) != "") continue;

        let notice = document.createElement("div");
        notice.id = noticeName;
        notices.appendChild(notice);

        let close_button = document.createElement("img");
        close_button.className = "close_button";
        close_button.src = "../images/deleteButton.png";
        notice.appendChild(close_button);
        close_button.addEventListener("click", closePopup);

        let popupContent = document.createElement("div");
        notice.appendChild(popupContent);

        let img = document.createElement("img");
        img.src = item.children[2].innerHTML;

        img.className = "notice_image";
        popupContent.appendChild(img);

        let title = document.createElement("h3");
        title.innerText = item.children[0].innerHTML;
        popupContent.appendChild(title);

        let content = document.createElement("div");
        content.innerText = item.children[1].innerHTML;
        popupContent.appendChild(content);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "do_not_see_today";
        notice.appendChild(checkbox);

        let text = document.createElement("span");
        text.innerText = "오늘 하루 보지 않기";
        notice.appendChild(text);
      }
    })
    .then((ret) => {
      let notice = document.getElementById("notice");
      if (notice.hasChildNodes() == false) notice.remove();
    });
}

function closePopup(event) {
  event.target.parentNode.style.display = "none";
  if (
    document.querySelector(`#${event.target.parentNode.id} .do_not_see_today`)
      .checked == true
  )
    setCookie(`${event.target.parentNode.id}`, "true", 86400000); // 하루동안 열지 않기
}

function setCookie(name, value, expire) {
  let currentDay = new Date();
  currentDay.setTime(currentDay.getTime() + expire);
  document.cookie =
    name + "=" + value + "; expires=" + currentDay.toUTCString();
}

function getCookie(name) {
  if (document.cookie == "") return "";

  let cookies = document.cookie.split(";");

  for (let i in cookies) {
    let key = cookies[i].split("=")[0].trim();
    let value = cookies[i].split("=")[1].trim();
    if (key == name) return value;
  }
  return "";
}

fetchNotice();
