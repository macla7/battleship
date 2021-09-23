import React, { useState } from "react";
import Player from "../logic/Player";
import Gameboard from "../logic/Gameboard";
import Ship from "../logic/Ship";
import BoardGrid from "./BoardGrid";

let humanBoard = Gameboard(Ship);
let compBoard = Gameboard(Ship);
let human = Player(humanBoard, "human");
human.gameboard.placeShip(3, "down", [4, 2]);
human.gameboard.placeShip(2, "across", [1, 5]);
let comp = Player(compBoard, "comp");

function GameLoop() {
  const [grid, setGrid] = useState(human.gameboard.grid);

  function handleClick(coords) {
    human.attack(comp.gameboard, coords);
    if (comp.gameboard.allSunk(comp.gameboard.getShips())) {
      // return "Player Won";
    }
    comp.randomAttack(human.gameboard);
    if (human.gameboard.allSunk(human.gameboard.getShips())) {
      // return "Comp Won";
    }

    setGrid([...human.gameboard.grid]);
  }

  return (
    <div>
      {/* Render setUp */}
      {/* Render Game */}
      <BoardGrid grid={human.gameboard.grid} handleClick={handleClick} />
      <h1>
        {" "}
        ------------------------------------------------------------------
      </h1>
      <BoardGrid grid={comp.gameboard.grid} handleClick={handleClick} />
    </div>
  );
}

export default GameLoop;
