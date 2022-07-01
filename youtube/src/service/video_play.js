import * as common from "./common";

export const viewMore = (viewMoreRef, descriptionRef, brieflyRef) => {
  viewMoreRef.current.style.display = 'none';
  descriptionRef.current.style.display = 'block';
  brieflyRef.current.style.display = 'block';
}

export const briefly = (viewMoreRef, descriptionRef, brieflyRef) => {
  viewMoreRef.current.style.display = 'block';
  descriptionRef.current.style.display = '-webkit-box';
  brieflyRef.current.style.display = 'none';
}

export const isNoticeAllClose = (notice, isNoticeClose) => {
  let isAllClose = true;

  notice.map((data, index) => {
    if (isNoticeClose && isNoticeClose[index])
      return '';
    if (common.getCookie(index) !== '')
      return '';
    isAllClose = false;
    return ''
  })

  return isAllClose;
}