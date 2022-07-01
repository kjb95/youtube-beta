import React from "react";
import NoticeElement from './notice_element';

import * as common from "../../service/common";

const Notice = ({notice, isNoticeClose, noticeClose, clickDoNotSeeToday}) => {
  return notice.map((data, index) => {
    if (isNoticeClose && isNoticeClose[index])
      return '';
    if (common.getCookie(index) !== '')
      return '';

    return <li key={index}> 
      <NoticeElement 
      title={data.title} 
      text={data.text} 
      img={data.img} 
      name={index} 
      noticeClose={noticeClose} 
      clickDoNotSeeToday={clickDoNotSeeToday}
    />
    </li>
  })
}

export default Notice;