const Gameboard = (Ship) => {
  let grid = [
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
  ];
  let ships = [];

  const getShips = () => ships;

  function placeShip(length, direction, anchor) {
    const newShip = Ship(length, direction, anchor);
    ships.push(newShip);
    newShip.getSquares().forEach((square) => {
      grid[square[0]][square[1]] = ships.length;
    });
  }

  // pure functions.. seems like a lot of effort tho....
  // don't think I can decopose this into pure functions as all 3 results cause side effects.
  function recieveAttack(coords, hitShip) {
    let square = grid[coords[0]][coords[1]];

    if (square === "h") {
      // something here re already being hit
      return false;
    }
    if (square === "e") {
      grid[coords[0]][coords[1]] = "h";
    } else {
      hitShip(ships[square - 1], coords);
      grid[coords[0]][coords[1]] = "h";
    }
  }

  function hitShip(ship, coords) {
    ship.hit(coords);
  }

  function allSunk(ships) {
    let notSunk = ships.filter((ship) => {
      return !ship.getSunk();
    });
    return notSunk.length === 0 ? true : false;
  }

  return { grid, placeShip, getShips, recieveAttack, hitShip, allSunk };
};

export default Gameboard;
