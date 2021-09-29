import React from "react";

function Square({ xCoord, yCoord, handleClick, value, hitClass, shipClass }) {
  function shoot() {
    handleClick([xCoord, yCoord]);
  }

  return (
    <div onClick={shoot} className={"square " + hitClass + " " + shipClass}>
      {value}
    </div>
  );
}

export default Square;
