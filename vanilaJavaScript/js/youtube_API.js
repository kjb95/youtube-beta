var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let id = new URL(window.location.href).searchParams.get("page");
function onYouTubeIframeAPIReady(fileName) {
    var youtubePlayer = new YT.Player('youtubePlayer', {
        videoId: id,
        playerVars: {
            'autoplay': 1
        },
        events: {
            'onStateChange': onPlayerStateChange  // 플레이어의 상태가 변경될 때마다 실행
        }
    });
}
function onPlayerStateChange(event) {
    if (event.data === 0) {
        let currentPlayList = document.getElementsByClassName("current_playlist")[0];
        if (currentPlayList.nextElementSibling != null)
            location.href = currentPlayList.nextElementSibling.lastChild.href;
    }
}