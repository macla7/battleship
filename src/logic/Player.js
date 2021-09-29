import { isEqual } from "lodash";

const Player = (gameboard, type) => {
  function attack(enemyBoard, coords) {
    return enemyBoard.recieveAttack(coords, enemyBoard.hitShip);
  }

  function _randomCoords() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  // Need to implement the hits array in gameboard..
  function randomAttack(enemyBoard) {
    let alreadyHit = true;
    let randomNewCoords;

    while (alreadyHit) {
      randomNewCoords = _randomCoords();
      alreadyHit = false;
      if (enemyBoard.getHits() !== []) {
        for (let i = 0; i < enemyBoard.getHits().length; i += 1) {
          if (isEqual(enemyBoard.getHits()[i], randomNewCoords)) {
            alreadyHit = true;
            break;
          }
        }
      }
    }

    return enemyBoard.recieveAttack(randomNewCoords, enemyBoard.hitShip);
  }
  return { gameboard, attack, randomAttack };
};

export default Player;
