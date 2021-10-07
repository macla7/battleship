import { intersectionWith, isEqual } from "lodash";

const Player = (gameboard, type) => {
  function attack(enemyBoard, coords) {
    return enemyBoard.recieveAttack(coords, enemyBoard.hitShip);
  }

  function _randomCoords() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  function randomAttack(enemyBoard, times) {
    let hitArr = [];
    let randomNewCoords;

    for (let i = 0; i < times; i += 1) {
      let alreadyHit = true;
      while (alreadyHit) {
        randomNewCoords = _randomCoords();
        if (
          !enemyBoard.onlyIncLetter([randomNewCoords], "h") &&
          intersectionWith(hitArr, [randomNewCoords], isEqual).length === 0
        ) {
          alreadyHit = false;
          hitArr.push(randomNewCoords);
          enemyBoard.recieveAttack(randomNewCoords, enemyBoard.hitShip);
        }
      }
    }
    return hitArr;
  }
  return { gameboard, attack, randomAttack };
};

export default Player;
