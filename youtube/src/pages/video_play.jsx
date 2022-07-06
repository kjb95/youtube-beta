import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import ReactPlayer from "react-player";
import qs from "qs";

import { fetchPlaylist, getJsonPlaylist, getCurrentPlaylist, fetchNotice} from "../service/common";
import { viewMore, briefly, isNoticeAllClose, checkboxChange, clickDoNotSeeToday, noticeClose } from '../service/vide_play/video_play';

import Playlist from "../components/video_play/playlist";
import RandomButton from "../components/video_play/random_button";
import AddButton from "../components/video_play/add_button";
import AddPlaylistModal from "../components/video_play/add_playlist_modal";
import DeleteButton from "../components/video_play/delete_button";
import Notice from "../components/video_play/notice";

import "../style/css/common.css";
import {
  NoticeBox,
  PlayingVideoDescriptionBox,
  PlayingVideoInformationBox,
  PlayingVideoSubscriberBox,
  PlayingVideoTitleBox,
  PlayingVideoYoutuberBox,
  PlayingVideoDiscriptionSection2,
  PlayingYoutubePlayerSection,
  PlaylistModifyButtonsSection,
  PlaylistsSection,
  PlayingVideoDiscriptionSection1,
  PlayingVideoMain,
  PlayingVideoDiscriptionSection3,
  PlayingVideoDiscriptionViewMore,
  PlayingVideoDescriptionBriefly,
} from "../style/styled_component/video_play";

const VideoPlay = () => {
  // window.localStorage.clear();
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const youtbeURL = "https://www.youtube.com/watch?v=" + query.page;

  const [sequentialPlaylist, setSequentialPlaylist] = useState(undefined);
  const [randomPlaylist, setRandomPlaylist] = useState(undefined);
  const [addPlaylistModal, setAddPlaylistModal] = useState(false);
  const [notice, setNotice] = useState(undefined);
  const [checkboxs, setCheckboxs] = useState();
  const [noticeCookie, setNoticeCookie] = useState();
  const [isNoticeClose, setIsNoticeClose] = useState();

  const viewMoreRef = useRef();
  const brieflyRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    fetchPlaylist()
      .then((data) => getJsonPlaylist(data))
      .then((data) => {
        setSequentialPlaylist(data[0]);
        setRandomPlaylist(data[1]);
      });

    fetchNotice().then((data) => {
      setNotice(data);
    });
  }, []);

  if (!sequentialPlaylist || !randomPlaylist || !notice) return "";

  const currentPlaylist = getCurrentPlaylist(
    sequentialPlaylist,
    query.page
  );

  return (
    <>
      <aside>
        <PlaylistsSection>
          <Playlist
            checkboxChange={ event => { checkboxChange(event, checkboxs, setCheckboxs); }}
            sequentialPlaylist={sequentialPlaylist}
            randomPlaylist={randomPlaylist}
          />
        </PlaylistsSection>
        <PlaylistModifyButtonsSection>
          <input type="hidden" id="isRandom" value="false" />
          <RandomButton
            setSequentialPlaylist={setSequentialPlaylist}
            setRandomPlaylist={setRandomPlaylist}
          />
          <AddButton setAddPlaylistModal={setAddPlaylistModal} />
          <DeleteButton
            checkboxs={checkboxs}
            setSequentialPlaylist={setSequentialPlaylist}
            setRandomPlaylist={setRandomPlaylist}
          />
        </PlaylistModifyButtonsSection>
      </aside>

      <PlayingVideoMain id='video'>
        <AddPlaylistModal
          addPlaylistModal={addPlaylistModal}
          setAddPlaylistModal={setAddPlaylistModal}
          setSequentialPlaylist={setSequentialPlaylist}
          setRandomPlaylist={setRandomPlaylist}
        />
        {!isNoticeAllClose(notice, isNoticeClose) && (  // 공지사항이 모두 닫히지 않았다면
          <NoticeBox id="notice">
            <Notice
              notice={notice}
              isNoticeClose={isNoticeClose}
              noticeClose={event => {
                noticeClose(event, isNoticeClose, setIsNoticeClose, noticeCookie)}
              }
              clickDoNotSeeToday={event => {
                clickDoNotSeeToday(event, noticeCookie, setNoticeCookie);
              }}
            />
          </NoticeBox>
        )}
        <PlayingYoutubePlayerSection>
          <ReactPlayer
            url={youtbeURL}
            width="100%"
            height="100%"
            playing
            controls
          />
        </PlayingYoutubePlayerSection>
        <PlayingVideoDiscriptionSection1>
          <PlayingVideoTitleBox>
            {currentPlaylist.title}
          </PlayingVideoTitleBox>
          <PlayingVideoInformationBox>
            {currentPlaylist.information}
          </PlayingVideoInformationBox>
        </PlayingVideoDiscriptionSection1>

        <PlayingVideoDiscriptionSection2>
          <PlayingVideoYoutuberBox>
            {currentPlaylist.youtuber}
          </PlayingVideoYoutuberBox>
          <PlayingVideoSubscriberBox>
            {currentPlaylist.subscriber}
          </PlayingVideoSubscriberBox>
        </PlayingVideoDiscriptionSection2>

        <PlayingVideoDiscriptionSection3>
          <PlayingVideoDescriptionBox ref={descriptionRef}>
            {currentPlaylist.description}
          </PlayingVideoDescriptionBox>
          <PlayingVideoDiscriptionViewMore 
            onClick={event => { viewMore(viewMoreRef, descriptionRef, brieflyRef); }}
            ref={viewMoreRef}>
            더보기
          </PlayingVideoDiscriptionViewMore>
          <PlayingVideoDescriptionBriefly 
            onClick={event => { briefly(viewMoreRef, descriptionRef, brieflyRef); }}
            ref={brieflyRef}>
            간략히
          </PlayingVideoDescriptionBriefly>
        </PlayingVideoDiscriptionSection3>
      </PlayingVideoMain>
    </>
  );
};

export default VideoPlay;
