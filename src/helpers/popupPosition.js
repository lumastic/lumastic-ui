const popupPosition = (anchor, transform, trig, popup) => {
  const { height: popHeight, width: popWidth } = popup.getBoundingClientRect();
  const {
    height: trigHeight,
    width: trigWidth
    // x: trigX2
  } = trig.getBoundingClientRect();
  const trigX = trig.offsetLeft;
  const trigY = trig.offsetTop;
  // console.log(trigX);
  let popTop;
  let popLeft;
  switch (anchor.v) {
    case "top":
      popTop = trigY;
      break;
    case "center":
      popTop = trigY + trigHeight / 2;
      break;
    case "bottom":
      popTop = trigY + trigHeight;
      break;
    default:
      break;
  }
  switch (anchor.h) {
    case "left":
      popLeft = trigX;
      break;
    case "center":
      popLeft = trigX + trigWidth / 2;
      break;
    case "right":
      popLeft = trigX + trigWidth;
      break;
    default:
      break;
  }
  // console.log("after anchor", popLeft);
  switch (transform.v) {
    case "top":
      break;
    case "center":
      popTop -= popHeight / 2;
      break;
    case "bottom":
      popTop -= popHeight;
      break;
    default:
      break;
  }
  switch (transform.h) {
    case "left":
      break;
    case "center":
      popLeft -= popWidth / 2;
      break;
    case "right":
      popLeft -= popWidth;
      break;
    default:
      break;
  }
  // console.log("after transformß", popLeft);
  if (popLeft <= 0 && trigX !== 0) {
    popLeft = 0;
  } else if (popWidth + popLeft > window.innerWidth) {
    popLeft -= popWidth + trigX - window.innerWidth + 20;
  }
  if (popTop <= 0 && trigY !== 0) {
    popTop = 0;
  } else if (popHeight + popTop > window.innerHeight) {
    popTop -= popHeight + trigY - window.innerHeight + 20;
  }
  // console.log(popLeft);
  return [popTop, popLeft];
};

export default popupPosition;
