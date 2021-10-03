import React, { useState } from "react";
import Ship from "../logic/Ship";
import BoardGrid from "./BoardGrid";
import island from "../assets/island.png";

function GameLoop(props) {
  console.log("Game loop rendered");

  // const [humanGrid, setHumanGrid] = useState(props.humanBoard.grid);
  // const [compGrid, setCompGrid] = useState(props.compBoard.grid);
  const [human, setHuman] = useState(props.human);
  const [comp, setComp] = useState(props.comp);
  const [finished, setFinished] = useState(false);
  const [hovered, setHovered] = useState([]);

  // Passed down to the square, which calls attack function on Player
  function handleShoot(coords, e) {
    if (finished) {
      return false;
    }
    // BOTH HERE, all we're doing is mutating current state. Let's return a message.
    let newAttack = props.human.attack(comp.gameboard, coords);
    if (!newAttack) {
      return false;
    }
    if (comp.gameboard.allSunk(comp.gameboard.getShips())) {
      console.log("did we win?");
      alert("You've won!");
      setFinished(true);
    }

    // BOTH HERE, all we're doing is mutating current state. Let's return a message.
    props.comp.randomAttack(human.gameboard);
    props.comp.randomAttack(human.gameboard);
    if (human.gameboard.allSunk(human.gameboard.getShips())) {
      alert("Skynet won, goodbye!");
      setFinished(true);
    }

    // If I was returning messages here (from pure functions) I could then update the relevant props... 🤔
    console.log("1.", human);
    setHuman((prevState) => ({ ...prevState }));
    setComp((prevState) => ({ ...prevState }));
    console.log("2", human);

    console.log(props.human.gameboard.grid);
  }

  // Calls function to place ship on human gameboard.
  function handlePlace(coords) {
    let direction = document.getElementById("directionForm").value;
    if (!human.gameboard.placeShip(direction, coords)) {
      console.log("hello boi");
      return false;
    }
    console.log(human.gameboard.getShips());
    setHuman((prevState) => ({ ...prevState }));
    if (human.gameboard.getShips().length === 5) {
      console.log("bing");
      props.handleSetupFinish();
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

  if (!props.setupDone) {
    return (
      <div className="gameSpace">
        <select id="directionForm">
          <option value="down">Down</option>
          <option value="across">Across</option>
        </select>
        <BoardGrid
          grid={human.gameboard.grid}
          human={true}
          setupDone={props.setupDone}
          handleClick={handlePlace}
          hovered={hovered}
          hoverGuide={hoverGuide}
        />
      </div>
    );
  } else {
    return (
      <div className="gameSpace">
        <BoardGrid
          // why use state here but access to props on computer..?
          grid={human.gameboard.grid}
          hits={human.gameboard.getHits()}
          human={true}
          setupDone={props.setupDone}
          handleClick={handleShoot}
          sunkSquares={human.gameboard.getSunkSquares()}
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
          setupDone={props.setupDone}
          sunkSquares={comp.gameboard.getSunkSquares()}
        />
      </div>
    );
  }
}

export default GameLoop;
