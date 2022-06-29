import React, { useState } from "react";
import Modal from 'react-modal'

const AddPlaylistModal = ({addPlaylistModal, setAddPlaylistModal, setSequentialPlaylist, setRandomPlaylist}) => {
  const [inputs, setInputs] = useState({
    id: '',
    img: '',
    title: '',
    youtuber: '',
    information: '',
    subscriber: '',
    isExist: true,
    description: ''
  });

  const { id, img, title, youtuber, information, subscriber, description } = inputs;

  const inputChange = (event) => {
    const { value, name} = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  return <Modal isOpen={addPlaylistModal} ariaHideApp={false}>
    <section>
      <div className="video_form">동영상 아이디 : <input type="text" name='id' value={id} onChange={inputChange}/></div>
      <div className="video_form">동영상 썸네일 이미지 : <input type="text" name='img' value={img} onChange={inputChange}/></div>
      <div className="video_form">동영상 제목 : <input type="text" name='title' value={title} onChange={inputChange}/></div>
      <div className="video_form">유튜버 : <input type="text" name='youtuber' value={youtuber} onChange={inputChange}/></div>
      <div className="video_form">동영상 정보 : <input type="text" name='information' value={information} onChange={inputChange}/></div>
      <div className="video_form">구독자 수 : <input type="text" name='subscriber' value={subscriber} onChange={inputChange}/></div>
      <div className="video_form">동영상 설명<br/><textarea name='description' value={description} onChange={inputChange}/></div>
    </section>
    <section id="popupButton">
        <input type="submit" onClick={
          event => {
            addPlaylist(inputs, setAddPlaylistModal, setSequentialPlaylist, setRandomPlaylist);
          }
        }/>
        <button onClick={
          event => {
            closeModal(setAddPlaylistModal);
          }
        }>닫기</button>
    </section>
  </Modal>
}

const addPlaylist = (inputs, setAddPlaylistModal, setSequentialPlaylist, setRandomPlaylist) => {
  const sequentialPlaylist = window.localStorage.getItem("sequentialPlaylist");
  const randomPlaylist = window.localStorage.getItem("randomPlaylist");
  const parsedSequentialPlaylist = JSON.parse(sequentialPlaylist);
  const parsedRandomPlaylist = JSON.parse(randomPlaylist);

  parsedSequentialPlaylist.push(inputs);
  parsedRandomPlaylist.push(inputs);

  window.localStorage.setItem("sequentialPlaylist",JSON.stringify(parsedSequentialPlaylist));
  window.localStorage.setItem("randomPlaylist", JSON.stringify(parsedRandomPlaylist));

  setSequentialPlaylist(parsedSequentialPlaylist);
  setRandomPlaylist(parsedRandomPlaylist);
  setAddPlaylistModal(false);
}

const closeModal = (setAddPlaylistModal) => {
  setAddPlaylistModal(false);
}

export default AddPlaylistModal;