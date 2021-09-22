const Ship = (length, direction, anchor) => {
  let hits = [];
  let sunk = false;
  let squares = [];

  const getHits = () => hits;
  const getSunk = () => sunk;
  const getLength = () => length;
  const getSquares = () => squares;

  function initShip() {
    for (let i = 0; i < length; i += 1) {
      if (direction === "down") {
        squares.push([anchor[0], anchor[1] - i]);
      }
      if (direction === "across") {
        squares.push([anchor[0] + i, anchor[1]]);
      }
    }
  }

  initShip();

  function isSunk() {
    if (hits.length === length) {
      sunk = true;
    }
  }

  const hit = (arr) => {
    const potHit = squares.filter((coor) => {
      if (coor[0] === arr[0] && coor[1] === arr[1]) {
        return true;
      }
      return false;
    });
    hits.push(potHit[0]);
    isSunk();
  };

  return { getSquares, getLength, getHits, getSunk, hit, isSunk };
};

export default Ship;
