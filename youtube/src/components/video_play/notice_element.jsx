import React from "react";

const NoticeElement = ({title, text, img, name, noticeClose, clickDoNotSeeToday}) => {
  return <>
    <img className="close_button" src="../img/deleteButton.png" alt='close_button' onClick={noticeClose} name={name}/>
    <div>
      <img src={img} className="notice_img" alt='notice_img'/>
        <h3>{title}</h3>
        <div>{text}</div>
    </div>
    <input type="checkbox" className="do_not_see_today" name={name} onClick={clickDoNotSeeToday}/>
    <span>오늘 하루 보지 않기</span>
  </>
}

export default NoticeElement;