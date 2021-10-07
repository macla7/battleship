import React, { useState } from "react";
import Ship from "../logic/Ship";
import BoardGrid from "./BoardGrid";
import island from "../assets/island.png";
import Player from "../logic/Player";
import Gameboard from "../logic/Gameboard";

let humanBoard;
let human;
let compBoard;
let comp;

function GameLoop(props) {
  console.log("gameloop rendered");

  function newGame() {
    console.log("NEW GAME MADE");
    humanBoard = Gameboard(Ship);
    compBoard = Gameboard(Ship, "comp");
    human = Player(humanBoard, "human");
    comp = Player(compBoard, "comp");
    compBoard.placeRandom();
    compBoard.placeRandom();
    compBoard.placeRandom();
    compBoard.placeRandom();
    compBoard.placeRandom();

    return { humanBoard, compBoard, human, comp };
  }

  // const [humanGrid, setHumanGrid] = useState(props.humanBoard.grid);
  // const [compGrid, setCompGrid] = useState(props.compBoard.grid);
  // const [human, setHuman] = useState(props.human);
  // const [comp, setComp] = useState(props.comp);

  const [finished, setFinished] = useState(false);
  const [setupDone, setSetupDone] = useState(false);
  const [hovered, setHovered] = useState([]);
  const [turn, setTurn] = useState(0);
  const [activeHuman, setActiveHuman] = useState([]);
  const [activeComp, setActiveComp] = useState([]);
  const [gameStateNum, setGameStateNum] = useState(0);

  if (gameStateNum !== props.gameNum) {
    newGame();
    setSetupDone(false);
    setGameStateNum(props.gameNum);
    setTurn(0);
    console.log("turn", turn);
  }

  // Passed down to the square, which calls attack function on Player
  function handleShoot(coords, element) {
    if (finished) {
      return false;
    }

    let newAttack = human.attack(comp.gameboard, coords);
    if (!newAttack) {
      return false;
    }
    setActiveHuman([coords]);

    setTurn((prevCount) => prevCount + 1);
    if (comp.gameboard.allSunk(comp.gameboard.getShips())) {
      alert("You've won!");
      setFinished(true);
    }

    let compArr = comp.randomAttack(human.gameboard, 1);
    setActiveComp(compArr);

    if (human.gameboard.allSunk(human.gameboard.getShips())) {
      alert("Skynet won, goodbye!");
      setFinished(true);
    }
  }

  // Calls function to place ship on human gameboard.
  function handlePlace(coords) {
    let direction = document.getElementById("directionForm").value;
    if (!human.gameboard.placeShip(direction, coords)) {
      return false;
    }
    // setHuman((prevState) => ({ ...prevState }));
    if (human.gameboard.getShips().length === 5) {
      setSetupDone(true);
      setFinished(false);
    }
  }

  // highlights where the ship will go during placement.
  function hoverGuide(Coords) {
    let direction = document.getElementById("directionForm").value;
    let shipNumber = human.gameboard.getShips().length;
    let lengthsArr = human.gameboard.getShipLengths();
    let hoverShip = Ship(lengthsArr[shipNumber], direction, Coords);
    let hoverCoords = hoverShip.getSquares();
    setHovered(hoverCoords);
  }

  if (!setupDone) {
    return (
      <div className="gameSpace">
        <select id="directionForm">
          <option value="down">Down</option>
          <option value="across">Across</option>
        </select>
        <BoardGrid
          grid={human.gameboard.getGrid()}
          human={true}
          setupDone={setupDone}
          handleClick={handlePlace}
          hovered={hovered}
          hoverGuide={hoverGuide}
        />
      </div>
    );
  } else {
    return (
      <div className="gameSpace">
        <div>
          Game Number: {props.gameNum} - Turn count: {turn}
        </div>
        <BoardGrid
          // why use state here but access to props on computer..?
          grid={human.gameboard.getGrid()}
          hits={human.gameboard.getHits()}
          human={true}
          setupDone={setupDone}
          handleClick={handleShoot}
          sunkSquares={human.gameboard.getSunkSquares()}
          activeSquares={activeComp}
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
          grid={comp.gameboard.getGrid()}
          hits={comp.gameboard.getHits()}
          human={false}
          handleClick={handleShoot}
          setupDone={setupDone}
          sunkSquares={comp.gameboard.getSunkSquares()}
          activeSquares={activeHuman}
        />
      </div>
    );
  }
}

export default GameLoop;
