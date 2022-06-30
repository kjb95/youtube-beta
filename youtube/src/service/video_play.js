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
