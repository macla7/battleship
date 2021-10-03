import React, { useState } from "react";

function Square({
  xCoord,
  yCoord,
  handleClick,
  children,
  human,
  setupDone,
  hoverGuide,
  squareClass,
}) {
  function shoot(e) {
    handleClick([xCoord, yCoord], e);
  }

  const [anim, setAnim] = useState("");

  function startAnim() {
    if (!human || !setupDone) {
      setAnim("anim");
    }
  }

  function handleHover() {
    console.log(setupDone);
    if (!setupDone) {
      hoverGuide([xCoord, yCoord]);
    }
  }

  return (
    <div
      onAnimationEnd={shoot}
      onClick={startAnim}
      onMouseEnter={handleHover}
      className={squareClass}
    >
      <div className={anim + " innerSquare"}>{children}</div>
    </div>
  );
}

export default Square;
