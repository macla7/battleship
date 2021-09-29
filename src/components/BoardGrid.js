import { isInteger } from "lodash";
import React from "react";
import uniqid from "uniqid";
import Square from "./Square";

function BoardGrid(props) {
  const squares = props.grid.map((colArr, i) => {
    let revCol = [...colArr].reverse();

    return (
      <div className="column" key={uniqid()}>
        {revCol.map((square, j) => {
          let hitClass = "";
          let shipClass = "";
          let value = "";
          if (props.human) {
            if (isInteger(square)) {
              value = "⛴";
              shipClass = "ship";
            }
          }
          if (square === "h" || square === "sh") {
            value = "X";
          }
          if (square === "sh") {
            value = "🔥";
            hitClass = "shipHit";
          }
          let xCoord = i;
          let yCoord = revCol.length - j - 1;

          return (
            <Square
              xCoord={xCoord}
              yCoord={yCoord}
              value={value}
              handleClick={props.handleClick}
              key={uniqid()}
              hitClass={hitClass}
              shipClass={shipClass}
            />
          );
        })}
      </div>
    );
  });

  return <div className="boardGrid">{squares}</div>;
}

export default BoardGrid;
