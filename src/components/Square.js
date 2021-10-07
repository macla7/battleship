import React from "react";

function Square({
  xCoord,
  yCoord,
  handleClick,
  children,
  setupDone,
  hoverGuide,
  squareClass,
  innerClass,
}) {
  function shoot(e) {
    handleClick([xCoord, yCoord], e.target);
  }

  function handleHover() {
    if (!setupDone) {
      hoverGuide([xCoord, yCoord]);
    }
  }

  return (
    <div className={squareClass} onClick={shoot} onMouseEnter={handleHover}>
      <div className={innerClass + " innerSquare"}>{children}</div>
    </div>
  );
}

export default Square;
