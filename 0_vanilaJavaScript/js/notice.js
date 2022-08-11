"use strict";

// json 데이터 읽기
(function fetchNotice (){
  fetch("../data/notice.json")
    .then(response => response.json())
    .then(data => {
      let notices = document.getElementById("notice");
      let index = -1;

      data.notices.forEach(noticeData => {
        let noticeName = "notice"+(++index);
        if (getCookie(noticeName) != "")
          return ;

        let notice = document.createElement('div');
        notice.id = noticeName;
        notices.appendChild(notice);

        let close_button = document.createElement('img');
        close_button.className="close_button";
        close_button.src="../img/deleteButton.png";
        notice.appendChild(close_button);
        close_button.addEventListener('click', closePopup);

        let noticeContent = document.createElement('div');
        notice.appendChild(noticeContent);

        let img = document.createElement('img');
        img.src = noticeData.img;
        img.className ="notice_img";
        noticeContent.appendChild(img);

        let title = document.createElement('h3');
        title.innerText = noticeData.title;
        noticeContent.appendChild(title);

        let text = document.createElement('div');
        text.innerText = noticeData.text;
        noticeContent.appendChild(text);

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "do_not_see_today";
        notice.appendChild(checkbox);

        let doNotSeeToday = document.createElement('span');
        doNotSeeToday.innerText = "오늘 하루 보지 않기";
        notice.appendChild(doNotSeeToday);
      })
    })
})();

// XML 데이터 읽기
// (function fetchNotice() {
//   fetch("../data/notice.xml")
//     .then((response) => response.text())
//     .then((data) => {
//       let domParser = new DOMParser();
//       let noticeData = domParser
//         .parseFromString(data, "text/xml")
//         .getElementsByTagName("notice");
//       let notices = document.getElementById("notice");
//       let index = -1;

//       for (let noticeData of noticeData) {
//         let noticeName = "notice" + ++index;
//         if (getCookie(noticeName) != "") continue;

//         let notice = document.createElement("div");
//         notice.id = noticeName;
//         notices.appendChild(notice);

//         let close_button = document.createElement("img");
//         close_button.className = "close_button";
//         close_button.src = "../img/deleteButton.png";
//         notice.appendChild(close_button);
//         close_button.addEventListener("click", closePopup);

//         let noticeContent = document.createElement("div");
//         notice.appendChild(noticeContent);

//         let img = document.createElement("img");
//         img.src = noticeData.children[2].innerHTML;
//         img.className = "notice_img";
//         noticeContent.appendChild(img);

//         let title = document.createElement("h3");
//         title.innerText = noticeData.children[0].innerHTML;
//         noticeContent.appendChild(title);

//         let text = document.createElement("div");
//         text.innerText = noticeData.children[1].innerHTML;
//         noticeContent.appendChild(text);

//         let checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.className = "do_not_see_today";
//         notice.appendChild(checkbox);

//         let doNotSeeToday = document.createElement("span");
//         doNotSeeToday.innerText = "오늘 하루 보지 않기";
//         notice.appendChild(doNotSeeToday);
//       }
//     })
//     .then((ret) => {
//       let notice = document.getElementById("notice");
//       if (notice.hasChildNodes() == false) notice.remove();
//     });
// })();

function closePopup(event) {
  if (document.querySelector(`#${event.target.parentNode.id} .do_not_see_today`).checked == true)
    setCookie(`${event.target.parentNode.id}`, "true", 86400000); // 하루동안 열지 않기
  event.target.parentNode.remove();
  if (document.getElementById("notice").hasChildNodes() == false) notice.remove();
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