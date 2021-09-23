import React from "react";

function BoardGrid(props) {
  function shoot(e) {
    props.handleClick([
      parseInt(e.target.getAttribute("xCoord")),
      parseInt(e.target.getAttribute("yCoord")),
    ]);
  }

  const squares = props.grid.map((colArr, i) => {
    let revCol = [...colArr].reverse();
    return (
      <div className="column">
        {revCol.map((square, j) => {
          return (
            <div
              className="square"
              xCoord={i}
              yCoord={revCol.length - j - 1}
              onClick={shoot}
            >
              {square}
            </div>
          );
        })}
      </div>
    );
  });

  return <div className="boardGrid">{squares}</div>;
}

export default BoardGrid;
