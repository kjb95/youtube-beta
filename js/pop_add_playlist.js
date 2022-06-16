'use strict';

window.resizeTo(400,450);

function addVideo() {
    let data = window.localStorage.getItem("playLists");
    let sequentialData = window.localStorage.getItem("sequentialPlayLists");
    let parsedData = JSON.parse(data);
    let parsedSequentialData = JSON.parse(sequentialData);

    let playList = {
        id : document.getElementById("videoFormVideoId").value,
        image : document.getElementById("videoFormVideoImage").value,
        title : document.getElementById("videoFormVideoTitle").value,
        user_name : document.getElementById("videoFormYoutuber").value,
        description : document.getElementById("videoFormVideoInformation").value,
        subscriber : document.getElementById("videoFormSubscriber").value,
        isExist : true,
        explanation : document.getElementById("videoFormVideoDescription").value
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