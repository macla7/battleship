import React, { useState } from "react";

function Square({
  xCoord,
  yCoord,
  handleClick,
  value,
  hitClass,
  shipClass,
  children,
  human,
  setupDone,
  hoverGuide,
  hoverClass,
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
      className={"square " + hitClass + " " + shipClass + " " + hoverClass}
    >
      <div className={anim}>{children}</div>
    </div>
  );
}

export default Square;
