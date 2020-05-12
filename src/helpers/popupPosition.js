const popupPosition = (anchor, transform, trig, popup) => {
  const { height: popHeight, width: popWidth } = popup.getBoundingClientRect();
  const {
    height: trigHeight,
    width: trigWidth,
    x: trigX
  } = trig.getBoundingClientRect();
  const trigY = trig.offsetTop;
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
  if (popLeft <= 0) {
    popLeft = 0;
  } else if (popWidth + trigX > window.innerWidth) {
    popLeft -= popWidth + trigX - window.innerWidth + 20;
  }

  return [popTop, popLeft];
};

export default popupPosition;
