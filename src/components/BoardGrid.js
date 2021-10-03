import { isInteger } from "lodash";
import React from "react";
import uniqid from "uniqid";
import Square from "./Square";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shipboi from "../assets/shipboi.png";
import dead from "../assets/dead.png";
import { isEqual } from "lodash";

function BoardGrid({
  grid,
  human,
  hovered = [],
  handleClick,
  setupDone,
  hoverGuide,
  sunkSquares = [],
}) {
  console.log("Board rendered");
  const squares = grid.map((colArr, i) => {
    let revCol = [...colArr].reverse();

    return (
      <div className="column" key={uniqid()}>
        {revCol.map((square, j) => {
          let squareClass = "square";
          let icon = "";
          let xCoord = i;
          let yCoord = revCol.length - j - 1;
          if (human) {
            if (isInteger(square)) {
              icon = "ship";
              squareClass += " ship";
            }
          }
          if (square === "h") {
            icon = "water";
          }
          if (square === "sh") {
            icon = "fire";
            squareClass += " hit";
          }

          let isHovered = hovered.filter((coords) =>
            isEqual(coords, [xCoord, yCoord])
          );
          let isSunk = sunkSquares.filter((coords) =>
            isEqual(coords, [xCoord, yCoord])
          );
          if (isHovered.length !== 0) {
            squareClass += " hovered";
          }
          if (isSunk.length !== 0) {
            icon = "dead";
            squareClass += " dead";
          }

          return (
            <Square
              xCoord={xCoord}
              yCoord={yCoord}
              handleClick={handleClick}
              key={uniqid()}
              squareClass={squareClass}
              human={human}
              setupDone={setupDone}
              hoverGuide={hoverGuide}
            >
              {icon === "ship" ? (
                <img src={shipboi} alt="Your Ship" />
              ) : icon === "dead" ? (
                <img src={dead} alt="sunk ship" />
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
