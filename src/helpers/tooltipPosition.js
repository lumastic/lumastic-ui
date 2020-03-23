const tooltipPosition = (position, element, tooltip) => {
  const {
    height: toolHeight,
    width: toolWidth
  } = tooltip.getBoundingClientRect();
  const {
    height: elHeight,
    width: elWidth,
    x: elX,
    y: elY
  } = element.getBoundingClientRect();
  let top;
  let left;
  switch (position) {
    case "top":
      top = elY - toolHeight - 6;
      left = elX + elWidth / 2 - toolWidth / 2;
      break;
    case "left":
      top = elY + elHeight / 2 - toolHeight / 2;
      left = elX - toolWidth - 6;
      break;
    case "right":
      top = elY + elHeight / 2 - toolHeight / 2;
      left = elX + elWidth + 6;
      break;
    case "bottom":
      top = elY + elHeight + 6;
      left = elX + elWidth / 2 - toolWidth / 2;
      break;
    default:
      break;
  }
  return [top, left];
};

export default tooltipPosition;
