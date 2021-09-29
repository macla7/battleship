import React, { useState } from "react";
import Player from "../logic/Player";
import Gameboard from "../logic/Gameboard";
import Ship from "../logic/Ship";
import BoardGrid from "./BoardGrid";

let humanBoard = Gameboard(Ship);
let compBoard = Gameboard(Ship, "comp");
let human = Player(humanBoard, "human");
let comp = Player(compBoard, "comp");

function GameLoop() {
  // function setUp() {
  //   let humanBoard = Gameboard(Ship);
  //   let compBoard = Gameboard(Ship, "comp");
  //   let human = Player(humanBoard, "human");
  //   let comp = Player(compBoard, "comp");
  // }

  const [hummanGrid, setHumanGrid] = useState(human.gameboard.grid);
  const [setupDone, setSetupDone] = useState(false);

  function handleShoot(coords) {
    let newAttack = human.attack(comp.gameboard, coords);
    if (!newAttack) {
      return false;
    }
    if (comp.gameboard.allSunk(comp.gameboard.getShips())) {
      console.log("did we win?");
      alert("You've won!");
    }
    comp.randomAttack(human.gameboard);
    if (human.gameboard.allSunk(human.gameboard.getShips())) {
      alert("Skynet won, goodbye!");
    }
    setHumanGrid([...human.gameboard.grid]);
    // setCompGrid([...comp.gameboard.grid]);
  }

  function handlePlace(coords) {
    console.log("hello boi");
    console.log(human.gameboard.getShips());
    let direction = document.getElementById("directionForm").value;
    human.gameboard.placeShip(direction, coords);
    console.log(human.gameboard.getShips());
    setHumanGrid([...humanBoard.grid]);
    if (humanBoard.getShips().length === 5) {
      setSetupDone(true);
    }
  }

  if (!setupDone) {
    return (
      <div>
        <select id="directionForm">
          <option value="down">Down</option>
          <option value="across">Across</option>
        </select>
        <BoardGrid grid={hummanGrid} human={true} handleClick={handlePlace} />
      </div>
    );
  } else {
    return (
      <div>
        {/* Render setUp */}
        {/* Render Game */}
        <BoardGrid
          grid={human.gameboard.grid}
          hits={human.gameboard.getHits()}
          human={true}
          handleClick={handleShoot}
        />
        <h1>
          {" "}
          ------------------------------------------------------------------
        </h1>
        <BoardGrid
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
