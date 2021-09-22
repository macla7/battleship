const Player = (gameboard, type) => {
  function attack(enemyBoard, coords) {
    return enemyBoard.recieveAttack(coords, enemyBoard.hitShip);
  }

  function randomAttack(enemyBoard) {
    return enemyBoard.recieveAttack(
      [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
      enemyBoard.hitShip
    );
  }
  return { gameboard, attack, randomAttack };
};

export default Player;
