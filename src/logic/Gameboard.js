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

  const getGrid = () => grid;
  const setGrid = (arr) => (grid = arr);
  const getGridSqu = (x, y) => grid[x][y];
  const setGridSqu = (x, y, val) => (grid[x][y] = val);
  const getShips = () => ships;
  const setShips = (arr) => (ships = arr);
  const getHits = () => hits;
  const setHits = (arr) => (hits = arr);
  const getShipLengths = () => shipLengths;
  const getSunkSquares = () => sunkSquares;
  const setSunkSquares = (arr) => (sunkSquares = arr);

  // If passes guards, ship is placed written to grid and ship array.
  function placeShip(direction, anchor) {
    // Guard 1
    if (!_placedInGrid(direction, anchor)) {
      return false;
    }

    const newShip = Ship(
      getShipLengths()[getShips().length],
      direction,
      anchor
    );

    // Guard 2
    let onlyEmpty = onlyIncLetter(newShip.getSquares(), "e");
    if (!onlyEmpty) {
      return false;
    }

    _placeShip(newShip);
    return true;
  }

  // Combined side effects
  function _placeShip(newShip) {
    _writeSquaresToGrid(newShip);
    setShips([...getShips(), newShip]);
  }

  // Side effect of placing ship, to grid array
  function _writeSquaresToGrid(ship) {
    ship.getSquares().forEach((square) => {
      setGridSqu([square[0]], [square[1]], getShips().length + 1);
    });
  }

  // returns true if squares are not empty.
  function onlyIncLetter(squares, letter) {
    for (let i = 0; i < squares.length; i += 1) {
      if (
        !getGridSqu([squares[i][0]], [squares[i][1]])
          .toString()
          .includes(letter)
      ) {
        return false;
      }
    }
    return true;
  }

  // If parts of ship is fully within bounds of grid, returns true
  function _placedInGrid(direction, anchor) {
    if (direction === "down") {
      return _allowedAlongY(anchor);
    }
    if (direction === "across") {
      return _allowedAlongX(anchor);
    }
    return false;
  }

  const _allowedAlongY = (anchor) =>
    anchor[1] - getShipLengths()[getShips().length] < -1 ? false : true;

  const _allowedAlongX = (anchor) =>
    anchor[0] + getShipLengths()[getShips().length] > 10 ? false : true;

  // Loops until a ship can be placed randomly.
  function placeRandom() {
    let placed = false;
    let directionArr = ["down", "across"];
    while (!placed) {
      let newCoords = [_randIntUpTo(10), _randIntUpTo(10)];
      let direction = _randIntUpTo(2);
      if (placeShip(directionArr[direction], newCoords)) {
        placed = true;
      }
    }
  }

  const _randIntUpTo = (num) => Math.floor(Math.random() * num);

  // pure functions.. seems like a lot of effort tho....
  // don't think I can decopose this into pure functions as all 3 results cause side effects.
  function recieveAttack(coords) {
    let square = getGridSqu([coords[0]], [coords[1]]);

    if (square === "h") {
      return false;
    } else if (square === "e") {
      setGridSqu([coords[0]], [coords[1]], "h");
      _addHit(coords);
      return "h";
    } else if (square === "sh") {
      return false;
    } else {
      _hitShip(getShips()[square - 1], coords);
      setGridSqu([coords[0]], [coords[1]], "sh");
      _addHit(coords);
      calcSunkSquares();
      return "sh";
    }
  }

  // adds to hits array.
  function _addHit(coords) {
    setHits([...getHits(), coords]);
  }

  // Invokes hit method on ship.
  function _hitShip(ship, coords) {
    ship.hit(coords);
  }

  // filters ships arr to see if any not sunk, if so, then false.
  function allSunk(shipArr) {
    let notSunk = shipArr.filter((ship) => {
      return !ship.getSunk();
    });
    return notSunk.length === 0 ? true : false;
  }

  // Combines all sunk ship squares and sets sunkSquares to this value.
  function calcSunkSquares() {
    let sunk = getShips().map((ship) => {
      if (ship.getSunk()) {
        return ship.getSquares();
      }
      return [];
    });
    setSunkSquares(sunk.flat(1));
  }

  return {
    getGridSqu,
    placeShip,
    getShips,
    recieveAttack,
    allSunk,
    getHits,
    placeRandom,
    getShipLengths,
    getSunkSquares,
    calcSunkSquares,
    onlyIncLetter,
    getGrid,
  };
};

export default Gameboard;
