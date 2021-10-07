import GameLoop from "./components/GameLoop";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFire, faShip, faWater } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

function App() {
  library.add(faFire, faShip, faWater);
  let staticInstructions =
    "Welcome to Battleship. Sink all your opponents boats first to win.";

  const [game, setGame] = useState(staticInstructions);
  const [gameNum, setGameNum] = useState(1);

  console.log("APP RENDERED HEEEEEEEEEEEERRRREEEEEE");

  function looper() {
    setGameNum((prevNum) => prevNum + 1);
    setGame(
      <GameLoop
        handleSetupStarted={looper}
        newStart={false}
        gameNum={gameNum}
      />
    );
  }

  function mainMenu() {
    setGame(staticInstructions);
  }

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
