import { isInteger } from "lodash";
import React from "react";
import uniqid from "uniqid";
import Square from "./Square";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BoardGrid(props) {
  const squares = props.grid.map((colArr, i) => {
    let revCol = [...colArr].reverse();

    return (
      <div className="column" key={uniqid()}>
        {revCol.map((square, j) => {
          let hitClass = "";
          let shipClass = "";
          let icon = "";
          if (props.human) {
            if (isInteger(square)) {
              icon = "ship";
              shipClass = "ship";
            }
          }
          if (square === "h") {
            icon = "water";
          }
          if (square === "sh") {
            icon = "fire";
            hitClass = "hit fresh";
          }
          let xCoord = i;
          let yCoord = revCol.length - j - 1;

          return (
            <Square
              xCoord={xCoord}
              yCoord={yCoord}
              handleClick={props.handleClick}
              key={uniqid()}
              hitClass={hitClass}
              shipClass={shipClass}
              human={props.human}
              setupDone={props.setupDone}
            >
              {icon === "" ? "" : <FontAwesomeIcon icon={icon} />}
            </Square>
          );
        })}
      </div>
    );
  });

  return <div className="boardGrid">{squares}</div>;
}

export default BoardGrid;
