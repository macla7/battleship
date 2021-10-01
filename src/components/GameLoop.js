import React, { useState } from "react";

import BoardGrid from "./BoardGrid";
import island from "../island.png";

function GameLoop({
  humanBoard,
  compBoard,
  human,
  comp,
  setupDone,
  handleSetupFinish,
}) {
  console.log(human, "in game loop", setupDone);

  const [humanGrid, setHumanGrid] = useState(human.gameboard.grid);
  const [finished, setFinished] = useState(false);

  function handleShoot(coords, e) {
    if (finished) {
      return false;
    }
    let newAttack = human.attack(comp.gameboard, coords);
    if (!newAttack) {
      return false;
    }
    if (comp.gameboard.allSunk(comp.gameboard.getShips())) {
      console.log("did we win?");
      alert("You've won!");
      setFinished(true);
    }
    comp.randomAttack(human.gameboard);
    if (human.gameboard.allSunk(human.gameboard.getShips())) {
      alert("Skynet won, goodbye!");
      setFinished(true);
    }
    setHumanGrid([...humanBoard.grid]);
  }

  function handlePlace(coords) {
    console.log(human.gameboard.getShips());
    let direction = document.getElementById("directionForm").value;
    if (!human.gameboard.placeShip(direction, coords)) {
      console.log("hello boi");
      return false;
    }
    console.log(human.gameboard.getShips());
    setHumanGrid([...humanBoard.grid]);
    if (humanBoard.getShips().length === 5) {
      console.log("bing");
      handleSetupFinish();
    }
  }

  if (!setupDone) {
    return (
      <div className="gameSpace">
        <select id="directionForm">
          <option value="down">Down</option>
          <option value="across">Across</option>
        </select>
        <BoardGrid
          grid={human.gameboard.grid}
          human={true}
          setupDone={setupDone}
          handleClick={handlePlace}
        />
      </div>
    );
  } else {
    return (
      <div className="gameSpace">
        <BoardGrid
          // why use state here but access to props on computer..?
          grid={humanGrid}
          hits={human.gameboard.getHits()}
          human={true}
          setupDone={setupDone}
          handleClick={handleShoot}
        />
        <div>
          <img src={island} alt="island board divider" />
          <img src={island} alt="island board divider" />
          <img src={island} alt="island board divider" />
          <img src={island} alt="island board divider" />
          <img src={island} alt="island board divider" />
          <img src={island} alt="island board divider" />
          <img src={island} alt="island board divider" />
        </div>
        <BoardGrid
          // Are these all examples of wrongly mutating props..?
          grid={comp.gameboard.grid}
          hits={comp.gameboard.getHits()}
          human={false}
          handleClick={handleShoot}
        />
      </div>
    );
  }
}

export default GameLoop;
