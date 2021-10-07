import Gameboard from "../logic/Gameboard";
import Ship from "../logic/Ship";

describe("create Gameboard", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = Gameboard(Ship);
    gameboard.placeShip("down", [2, 4]);
    return gameboard;
  });

  test("placeShip, places ship number on board", () => {
    expect(gameboard.getGridSqu(2, 5)).toBe("e");
    expect(gameboard.getGridSqu(2, 2)).toBe(1);
    expect(gameboard.getGridSqu(2, 1)).toBe(1);
    expect(gameboard.getShips().length).toBe(1);
  });

  test("on '\\d', recieveAttack mutates grid, sends hit command, returns 'sh'", () => {
    expect(gameboard.recieveAttack([2, 2])).toBe("sh");
    expect(gameboard.getHits()).toContainEqual([2, 2]);
    expect(gameboard.getGridSqu(2, 2)).toBe("sh");
  });

  test("on 'e', recieveAttack mutates grid, returns 'h'", () => {
    expect(gameboard.recieveAttack([1, 2])).toBe("h");
    expect(gameboard.getHits()).toContainEqual([1, 2]);
    expect(gameboard.getGridSqu(1, 2)).toBe("h");
  });

  test("on 'h'. recieveAttack returns false if already hit", () => {
    gameboard.recieveAttack([1, 2]);
    expect(gameboard.getHits()).toContainEqual([1, 2]);
    expect(gameboard.getGridSqu(1, 2)).toBe("h");
    expect(gameboard.recieveAttack([1, 2])).toBe(false);
  });

  test("on 'sh'. recieveAttack returns false if ship already hit", () => {
    gameboard.recieveAttack([2, 2]);
    expect(gameboard.getHits()).toContainEqual([2, 2]);
    expect(gameboard.getGridSqu(2, 2)).toBe("sh");
    expect(gameboard.recieveAttack([2, 2])).toBe(false);
  });

  test("getHits returns all hit squares on grid", () => {
    gameboard.recieveAttack([2, 2]);
    gameboard.recieveAttack([0, 0]);
    expect(gameboard.getHits()).toEqual([
      [2, 2],
      [0, 0],
    ]);
  });

  test("getShipLengths returns classic game lengths", () => {
    expect(gameboard.getShipLengths()).toEqual([5, 4, 3, 3, 2]);
  });

  test("allSunk returns true if all sunk", () => {
    const getSunk = jest.fn();
    getSunk.mockReturnValue(true);
    const mockShips = [{ getSunk }, { getSunk }];

    expect(gameboard.allSunk(mockShips)).toBe(true);
  });

  test("allSunk returns false if ship alive", () => {
    const getSunk = jest.fn();
    getSunk.mockReturnValueOnce(false).mockReturnValue(true);

    const mockShips = [{ getSunk }, { getSunk }];
    expect(gameboard.allSunk(mockShips)).toBe(false);
  });

  //A somewhat questionable test..
  test("placerandom places ship randomly", () => {
    gameboard.placeRandom();
    expect(gameboard.getShips().length).toBe(2);
  });

  test("getSunkSquares to ret arr with all sunk ships sqaures", () => {
    gameboard.placeShip("down", [0, 4]);
    gameboard.recieveAttack([2, 4]);
    gameboard.recieveAttack([2, 3]);
    gameboard.recieveAttack([2, 2]);
    gameboard.recieveAttack([2, 1]);
    expect(gameboard.getSunkSquares()).toEqual([]);
    gameboard.recieveAttack([2, 0]);
    gameboard.calcSunkSquares();
    expect(gameboard.getSunkSquares()).toEqual([
      [2, 4],
      [2, 3],
      [2, 2],
      [2, 1],
      [2, 0],
    ]);

    gameboard.recieveAttack([0, 4]);
    gameboard.recieveAttack([0, 3]);
    gameboard.recieveAttack([0, 2]);
    gameboard.recieveAttack([0, 1]);
    expect(gameboard.getSunkSquares()).toEqual([
      [2, 4],
      [2, 3],
      [2, 2],
      [2, 1],
      [2, 0],
      [0, 4],
      [0, 3],
      [0, 2],
      [0, 1],
    ]);
  });

  test("onlyIncLetter returns true if all empty & given 'e'", () => {
    expect(
      gameboard.onlyIncLetter(
        [
          [0, 0],
          [1, 2],
          [9, 9],
        ],
        "e"
      )
    ).toBe(true);
  });

  test("onlyIncLetter returns false if not all are empty & given 'e'", () => {
    expect(
      gameboard.onlyIncLetter(
        [
          [0, 0],
          [2, 2],
          [9, 9],
        ],
        "e"
      )
    ).toBe(false);
  });

  test("onlyIncLetter returns true if 'h' & 'sh' squares & given 'h'", () => {
    gameboard.recieveAttack([1, 2]);
    gameboard.recieveAttack([2, 2]);
    gameboard.recieveAttack([3, 2]);
    expect(
      gameboard.onlyIncLetter(
        [
          [1, 2],
          [2, 2],
          [3, 2],
        ],
        "h"
      )
    ).toBe(true);
  });

  test("getGrid returns grid array", () => {
    gameboard.recieveAttack([1, 2]);
    gameboard.recieveAttack([2, 2]);
    gameboard.recieveAttack([3, 2]);
    expect(gameboard.getGrid()).toEqual([
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "h", "e", "e", "e", "e", "e", "e", "e"],
      [1, 1, "sh", 1, 1, "e", "e", "e", "e", "e"],
      ["e", "e", "h", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ]);
    expect(gameboard.getGrid()).not.toEqual([
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      [1, 1, 1, 1, 1, "e", "e", "e", "e", "e"],
      ["e", "e", "h", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
      ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ]);
  });
});
