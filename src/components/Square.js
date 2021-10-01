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

  return (
    <div
      onAnimationEnd={shoot}
      onClick={startAnim}
      className={"square " + hitClass + " " + shipClass}
    >
      <div className={anim}>{children}</div>
    </div>
  );
}

export default Square;
