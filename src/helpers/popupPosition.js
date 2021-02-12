function bodyBox(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    height: rect.height,
    width: rect.width
  };
}

function offsetBox(el) {
  const rect = el.getBoundingClientRect();
  return {
    top: el.offsetTop,
    left: el.offsetLeft,
    height: rect.height,
    width: rect.width
  };
}

const popupPosition = (anchor, transform, trig, popup) => {
  const { height: popHeight, width: popWidth } = popup.getBoundingClientRect();
  // console.log(popHeight, popWidth);
  // console.log("Popparams", { height: popHeight, width: popWidth });
  const { height: trigHeight, width: trigWidth, left: trigX, top: trigY } =
    popup?.parentElement?.nodeName === "BODY" ? bodyBox(trig) : offsetBox(trig);
  // console.log("Offsetbox", offsetBox(trig));
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
  if (popLeft <= 0 && trigX !== 0) {
    popLeft = 0;
  } else if (popWidth + popLeft > window.innerWidth) {
    popLeft -= popWidth + trigX - window.innerWidth + 20;
  }
  console.log("Final Position", { top: popTop, left: popLeft });
  return [popTop, popLeft];
};

export default popupPosition;
