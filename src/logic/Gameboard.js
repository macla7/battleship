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
  let sunkSquares = [];

  const getShips = () => ships;
  const getHits = () => hits;
  const getShipLengths = () => shipLengths;
  const getSunkSquares = () => sunkSquares;

  function placeShip(direction, anchor) {
    if (direction === "down" && anchor[1] - shipLengths[ships.length] < -1) {
      console.log("ship off bottom");
      return false;
    }
    if (direction === "across" && anchor[0] + shipLengths[ships.length] > 10) {
      console.log("ship off side");
      return false;
    }

    const newShip = Ship(shipLengths[ships.length], direction, anchor);
    let squares = newShip.getSquares();
    let overlap = false;
    for (let i = 0; i < squares.length; i += 1) {
      if (grid[squares[i][0]][squares[i][1]] !== "e") {
        overlap = true;
      }
    }
    if (overlap) {
      return false;
    }

    squares.forEach((square) => {
      grid[square[0]][square[1]] = ships.length + 1;
    });

    ships.push(newShip);
    return true;
  }

  function placeRandom() {
    let placed = false;
    let directionArr = ["down", "across"];
    while (!placed) {
      let newCoords = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      let direction = Math.floor(Math.random() * 2);
      if (placeShip(directionArr[direction], newCoords)) {
        placed = true;
      }
    }
  }

  // pure functions.. seems like a lot of effort tho....
  // don't think I can decopose this into pure functions as all 3 results cause side effects.
  function recieveAttack(coords) {
    let square = grid[coords[0]][coords[1]];

    if (square === "h") {
      // something here re already being hit
      return false;
    } else if (square === "e") {
      grid[coords[0]][coords[1]] = "h";
      _addHit(coords);
      return true;
    } else if (square === "sh") {
      // something here re ship already being hit
      return false;
    } else {
      _hitShip(ships[square - 1], coords);
      grid[coords[0]][coords[1]] = "sh";
      _addHit(coords);
      calcSunkSquares();
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

  function calcSunkSquares() {
    let sunk = ships.map((ship) => {
      if (ship.getSunk()) {
        return ship.getSquares();
      }
      return false;
    });
    sunkSquares = sunk.flat(1);
  }

  return {
    grid,
    placeShip,
    getShips,
    recieveAttack,
    allSunk,
    getHits,
    placeRandom,
    getShipLengths,
    getSunkSquares,
    calcSunkSquares,
  };
};

export default Gameboard;
