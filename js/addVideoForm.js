'use strict';

window.resizeTo(300,450);

function addVideo() {
    let data = window.localStorage.getItem("playLists");
    let sequentialData = window.localStorage.getItem("sequentialPlayLists");
    let parsedData = JSON.parse(data);
    let parsedSequentialData = JSON.parse(sequentialData);

    let playList = {
        id : document.getElementById("video_id").value,
        image : document.getElementById("content_image").value,
        title : document.getElementById("video_title").value,
        user_name : document.getElementById("video_user_name").value,
        description : document.getElementById("content_description").value,
        subscriber : document.getElementById("subscriber").value,
        isExist : true,
        explanation : document.getElementById("video_description").value
    }
    parsedData.playList.push(playList);
    parsedSequentialData.playList.push(playList);

    window.localStorage.setItem("playLists", JSON.stringify(parsedData));
    window.localStorage.setItem("sequentialPlayLists", JSON.stringify(parsedSequentialData));

    opener.location.reload();
    window.close();
}

function exit() {
    window.close();
}