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
  let staticInstructions =
    "Welcome to Battleship. Sink all your opponents boats first to win.";

  const [game, setGame] = useState(staticInstructions);

  function handleSetupFinish() {
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

  console.log("App component rendered");

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
    return { humanBoard, compBoard, human, comp };
  }

  function mainMenu() {
    setGame(staticInstructions);
  }

  newGame();

  return (
    <div className="AppCont">
      <div className="App">
        <header className="App-header">
          <h1>BATTLESHIP</h1>
        </header>
        {game}
        <nav>
          <button onClick={looper}>New Game</button>
          <button onClick={mainMenu}>Main Menu</button>
        </nav>
      </div>
      <div className="iconCredits">
        *Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        and{" "}
        <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">
          iconixar{" "}
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com{" "}
        </a>
      </div>
    </div>
  );
}

export default App;
