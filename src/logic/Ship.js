const Ship = (length, direction, anchor) => {
  let hits = [];
  let sunk = false;
  let squares = [];

  const getHits = () => hits;
  const setHits = (arr) => (hits = arr);
  const getSunk = () => sunk;
  const setSunk = (bool) => (sunk = bool);

  const getSquares = () => squares;
  const setSquares = (arr) => (squares = arr);

  // Creates squares array for ship.
  function initShip() {
    let squaresHold = [];
    for (let i = 0; i < length; i += 1) {
      if (direction === "down") {
        squaresHold.push([anchor[0], anchor[1] - i]);
      }
      if (direction === "across") {
        squaresHold.push([anchor[0] + i, anchor[1]]);
      }
    }
    setSquares(squaresHold);
  }

  initShip();

  // If hit squares length is same as length, then returns true
  function isSunk() {
    if (getHits().length === length) {
      setSunk(true);
    }
  }

  // on correct hit, adds to hits array and checks if sunk.
  const hit = (coords) => {
    const potHit = _isShipsSqu(coords);
    if (potHit.length !== 0) {
      setHits([...getHits(), potHit[0]]);
      isSunk();
    }
  };

  // If ship has square, returns square.
  function _isShipsSqu(coords) {
    return getSquares().filter(
      (squ) => squ[0] === coords[0] && squ[1] === coords[1]
    );
  }

  return { getSquares, getHits, getSunk, hit, isSunk };
};

export default Ship;
