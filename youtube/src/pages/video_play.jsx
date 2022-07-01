import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import ReactPlayer from "react-player";
import qs from "qs";

import * as common from "../service/common.js";
import * as video_play from "../service/video_play";

import Playlist from "../components/video_play/playlist";
import RandomButton from "../components/video_play/random_button";
import AddButton from "../components/video_play/add_button";
import AddPlaylistModal from '../components/video_play/add_playlist_modal';
import DeleteButton from '../components/video_play/delete_button';
import Notice from '../components/video_play/notice';

import "../style/common.css";
import "../style/video_play.css";
import "../style/notice.css";
import "../style/playlist.css";

const VideoPlay = () => {
  // window.localStorage.clear();
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const youtbeURL = "https://www.youtube.com/watch?v=" + query.page;

  const [sequentialPlaylist, setSequentialPlaylist] = useState(undefined);
  const [randomPlaylist, setRandomPlaylist] = useState(undefined);
  const [addPlaylistModal, setAddPlaylistModal] = useState(false);
  const [notice, setNotice] = useState(undefined);
  
  useEffect(() => {
    common.fetchPlaylist()
      .then((data) => common.getJsonPlaylist(data))
      .then((data) => {
        setSequentialPlaylist(data[0]);
        setRandomPlaylist(data[1]);
      });
    
    common.fetchNotice()
      .then(data => {
        setNotice(data);
      })
  }, []);

  const [checkboxs, setCheckboxs] = useState();
  const checkboxChange = (event) => {
    const {name, checked} = event.target;
    setCheckboxs({
      ...checkboxs,
      [name]: checked
    });
  }

  const [noticeCookie, setNoticeCookie] = useState();
  const clickDoNotSeeToday = (event) => {
    const {name} = event.target;

    if (event.target.checked === true)
      setNoticeCookie({
        ...noticeCookie,
        [name]: true
      })
    else
      setNoticeCookie({
        ...noticeCookie,
        [name]: false
      })
  }

  const [isNoticeClose, setIsNoticeClose] = useState();
  const noticeClose = (event) => {
    const {name} = event.target;
    setIsNoticeClose({
      ...isNoticeClose,
      [name]: true
    })

    if (noticeCookie && noticeCookie[name] === true)
      common.setCookie(name, 'true', 86400000);  // 하루동안 열지 않기
  }
  
  const noticeRef = useRef();
  const viewMoreRef = useRef();
  const brieflyRef = useRef();
  const descriptionRef = useRef();

  if (!sequentialPlaylist || !randomPlaylist || !notice) return "";

  const currentPlaylist = common.getCurrentPlaylist(sequentialPlaylist, query.page);

  return (
    <>
      <aside>
        <section id="playlists">
          <Playlist
            checkboxChange={checkboxChange}
            sequentialPlaylist={sequentialPlaylist}
            randomPlaylist={randomPlaylist}
          />
        </section>
        <section id="playlistsButton">
          <input type="hidden" id="isRandom" value="false" />
          <RandomButton
            setSequentialPlaylist={setSequentialPlaylist}
            setRandomPlaylist={setRandomPlaylist}
          />
          <AddButton setAddPlaylistModal={setAddPlaylistModal}/>
          <DeleteButton checkboxs={checkboxs} setSequentialPlaylist={setSequentialPlaylist} setRandomPlaylist={setRandomPlaylist}/>
        </section>
      </aside>
      <main id="video">
        <AddPlaylistModal 
          addPlaylistModal={addPlaylistModal}
          setAddPlaylistModal={setAddPlaylistModal}
          setSequentialPlaylist={setSequentialPlaylist}
          setRandomPlaylist={setRandomPlaylist}
        />
        {
          !video_play.isNoticeAllClose(notice, isNoticeClose) &&
          <section id='notice' ref={noticeRef}>
            <Notice 
              notice={notice}
              isNoticeClose={isNoticeClose}
              noticeClose={noticeClose}
              clickDoNotSeeToday={clickDoNotSeeToday}
            />
          </section>
        }
        <section id="youtubePlayer">
          <ReactPlayer
            url={youtbeURL}
            width="100%"
            height="100%"
            playing
            controls
          />
        </section>
        <section>
          <div id="videoTitle">{currentPlaylist.title}</div>
          <br />
          <div id="videoInformation">{currentPlaylist.information}</div>
          <br />
        </section>
        <section id="youtuberInformation">
          <br />
          <div id="youtuber">{currentPlaylist.youtuber}</div>
          <br />
          <div id="subscriber">{currentPlaylist.subscriber}</div>
          <br />
          <div id="videoDescription" ref={descriptionRef}>{currentPlaylist.description}</div>
          <br />
          <div 
            id="viewMore" 
            onClick={ event => {video_play.viewMore(viewMoreRef, descriptionRef, brieflyRef);} }
            ref={viewMoreRef}>더보기</div>
          <div 
            id="briefly"
            onClick={ event => {video_play.briefly(viewMoreRef, descriptionRef, brieflyRef);} }
            ref={brieflyRef}>간략히</div>
          <br />
        </section>
      </main>
    </>
  );
};

export default VideoPlay;
