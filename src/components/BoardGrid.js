import { isInteger } from "lodash";
import React from "react";
import uniqid from "uniqid";
import Square from "./Square";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shipboi from "../shipboi.png";
import { isEqual } from "lodash";

function BoardGrid({
  grid,
  human,
  hovered = [],
  handleClick,
  setupDone,
  hoverGuide,
}) {
  console.log("Board rendered");
  const squares = grid.map((colArr, i) => {
    let revCol = [...colArr].reverse();

    return (
      <div className="column" key={uniqid()}>
        {revCol.map((square, j) => {
          let hitClass = "";
          let shipClass = "";
          let hoverClass = "";
          let icon = "";
          if (human) {
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
          let isHovered = hovered.filter((coords) =>
            isEqual(coords, [xCoord, yCoord])
          );
          if (isHovered.length !== 0) {
            hoverClass = "hovered";
          }

          return (
            <Square
              xCoord={xCoord}
              yCoord={yCoord}
              handleClick={handleClick}
              key={uniqid()}
              hitClass={hitClass}
              shipClass={shipClass}
              hoverClass={hoverClass}
              human={human}
              setupDone={setupDone}
              hoverGuide={hoverGuide}
            >
              {icon === "ship" ? (
                <img src={shipboi} alt="Your Ship" />
              ) : icon === "" ? (
                ""
              ) : (
                <FontAwesomeIcon icon={icon} />
              )}
            </Square>
          );
        })}
      </div>
    );
  });

  return <div className="boardGrid">{squares}</div>;
}

export default BoardGrid;
