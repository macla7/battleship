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
  let shipLengths = [5, 4, 3, 3, 2];
  let hits = [];

  const getShips = () => ships;
  const getHits = () => hits;

  function placeShip(direction, anchor) {
    if (direction === "down" && anchor[1] - shipLengths[0] < -1) {
      console.log("ship off bottom");
      return false;
    }
    if (direction === "across" && anchor[0] + shipLengths[0] > 10) {
      console.log("ship off side");
      return false;
    }

    const newShip = Ship(shipLengths.shift(), direction, anchor);
    ships.push(newShip);
    console.log("ships should", ships);
    newShip.getSquares().forEach((square) => {
      grid[square[0]][square[1]] = ships.length;
    });
  }

  function placeRandom() {}

  // pure functions.. seems like a lot of effort tho....
  // don't think I can decopose this into pure functions as all 3 results cause side effects.
  function recieveAttack(coords) {
    let square = grid[coords[0]][coords[1]];

    if (square === "h") {
      // something here re already being hit
      return false;
    }
    if (square === "e") {
      grid[coords[0]][coords[1]] = "h";
      _addHit(coords);
      return true;
    } else {
      _hitShip(ships[square - 1], coords);
      grid[coords[0]][coords[1]] = "sh";
      _addHit(coords);
      return true;
    }
  }

  function _addHit(coords) {
    hits.push(coords);
  }

  function _hitShip(ship, coords) {
    ship.hit(coords);
  }

  function allSunk(ships) {
    let notSunk = ships.filter((ship) => {
      return !ship.getSunk();
    });
    return notSunk.length === 0 ? true : false;
  }

  return {
    grid,
    placeShip,
    getShips,
    recieveAttack,
    allSunk,
    getHits,
  };
};

export default Gameboard;
