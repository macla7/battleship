import GameLoop from "./components/GameLoop";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFire, faShip, faWater } from "@fortawesome/free-solid-svg-icons";
import Player from "./logic/Player";
import Gameboard from "./logic/Gameboard";
import Ship from "./logic/Ship";
import React, { useState } from "react";

function App() {
  library.add(faFire, faShip, faWater);
  let humanBoard;
  let human;
  let compBoard;
  let comp;

  const [game, setGame] = useState("");

  function handleSetupFinish() {
    console.log("called?");
    setGame(
      <GameLoop
        humanBoard={humanBoard}
        compBoard={compBoard}
        human={human}
        comp={comp}
        setupDone={true}
        handleSetupFinish={handleSetupFinish}
      />
    );
  }

  console.log("please tell me...");

  function looper() {
    let newPlay = newGame();
    setGame(
      <GameLoop
        humanBoard={newPlay.humanBoard}
        compBoard={newPlay.compBoard}
        human={newPlay.human}
        comp={newPlay.comp}
        setupDone={false}
        handleSetupFinish={handleSetupFinish}
      />
    );
  }

  function newGame() {
    humanBoard = Gameboard(Ship);
    compBoard = Gameboard(Ship, "comp");
    human = Player(humanBoard, "human");
    comp = Player(compBoard, "comp");
    compBoard.placeRandom();
    compBoard.placeRandom();
    compBoard.placeRandom();
    compBoard.placeRandom();
    compBoard.placeRandom();
    humanBoard.placeRandom();
    humanBoard.placeRandom();
    humanBoard.placeRandom();
    humanBoard.placeRandom();
    return { humanBoard, compBoard, human, comp };
  }

  function mainMenu() {
    setGame("");
  }

  newGame();

  return (
    <div className="AppCont">
      <div className="App">
        <header className="App-header">
          <h1>BATTLESHIP</h1>
        </header>
        {game}
        <button onClick={looper}>New Game</button>
        <button onClick={mainMenu}>Main Menu</button>
      </div>
    </div>
  );
}

export default App;
