import React, { useState } from "react";
import Modal from "react-modal";
import {
  AddPlaylistButtonsSection,
  AddPlaylistFormBox,
} from "../../style/styled_component/video_play";
import {inputChange, addPlaylist, closeModal} from '../../service/vide_play/add_playlist_modal';

const AddPlaylistModal = ({
  addPlaylistModal,
  setAddPlaylistModal,
  setSequentialPlaylist,
  setRandomPlaylist,
}) => {
  const [inputs, setInputs] = useState({
    id: "",
    img: "",
    title: "",
    youtuber: "",
    information: "",
    subscriber: "",
    isExist: true,
    description: "",
  });

  const { id, img, title, youtuber, information, subscriber, description } =
    inputs;

  return (
    <Modal
      isOpen={addPlaylistModal}
      ariaHideApp={false}
      style={{ content: { width: "40%", height: "70%" } }}>
      <AddPlaylistFormBox>
        {"동영상 아이디 : "}
        <input 
          type="text" 
          name="id" 
          value={id} 
          onChange={event => {
            inputChange(event, inputs, setInputs);
          }}/>
      </AddPlaylistFormBox>
      <AddPlaylistFormBox>
        {"동영상 썸네일 이미지 : "}
        <input 
          type="text" 
          name="img" 
          value={img} 
          onChange={event => {
            inputChange(event, inputs, setInputs);
          }}/>
      </AddPlaylistFormBox>
      <AddPlaylistFormBox>
        {"동영상 제목 : "}
        <input
          type="text" 
          name="title" 
          value={title} 
          onChange={event => {
            inputChange(event, inputs, setInputs);
          }}/>
      </AddPlaylistFormBox>
      <AddPlaylistFormBox>
        {"유튜버 : "}
        <input
          type="text"
          name="youtuber"
          value={youtuber}
          onChange={event => {
            inputChange(event, inputs, setInputs);
          }}/>
      </AddPlaylistFormBox>
      <AddPlaylistFormBox>
        {"동영상 정보 : "}
        <input
          type="text"
          name="information"
          value={information}
          onChange={event => {
            inputChange(event, inputs, setInputs);
          }}/>
      </AddPlaylistFormBox>
      <AddPlaylistFormBox>
        {"구독자 수 : "}
        <input
          type="text"
          name="subscriber"
          value={subscriber}
          onChange={event => {
            inputChange(event, inputs, setInputs);
          }}/>
      </AddPlaylistFormBox>
      <AddPlaylistFormBox>
        동영상 설명
        <textarea
          name="description"
          value={description}
          onChange={event => {
            inputChange(event, inputs, setInputs);
          }}/>
      </AddPlaylistFormBox>
      <AddPlaylistButtonsSection>
        <input
          type="submit"
          onClick={(event) => {
            addPlaylist(
              inputs,
              setAddPlaylistModal,
              setSequentialPlaylist,
              setRandomPlaylist,
              setInputs
            );
          }}/>
        <button onClick={(event) => { closeModal(setAddPlaylistModal, setInputs); }}>닫기</button>
      </AddPlaylistButtonsSection>
    </Modal>
  );
};

export default AddPlaylistModal;
