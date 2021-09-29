import Gameboard from "../logic/Gameboard";
import Ship from "../logic/Ship";

describe("create Gameboard", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = Gameboard(Ship);
    gameboard.placeShip("down", [2, 4]);
    return gameboard;
  });

  test("gameboard can place ship", () => {
    expect(gameboard.grid[2][5]).toBe("e");
    expect(gameboard.grid[2][2]).toBe(1);
    expect(gameboard.grid[2][1]).toBe(1);
    expect(gameboard.getShips().length).toBe(1);
  });

  test("on '\\d', recieveAttack mutates grid, sends hit command, returns true", () => {
    expect(gameboard.recieveAttack([2, 2])).toBe(true);
    expect(gameboard.getHits()).toContainEqual([2, 2]);
    expect(gameboard.grid[2][2]).toBe("sh");
  });

  test("on 'e', recieveAttack mutates grid, returns true", () => {
    expect(gameboard.recieveAttack([1, 2])).toBe(true);
    expect(gameboard.getHits()).toContainEqual([1, 2]);
    expect(gameboard.grid[1][2]).toBe("h");
  });

  test("on 'h'. recieveAttack returns false if already hit", () => {
    gameboard.recieveAttack([1, 2]);
    expect(gameboard.getHits()).toContainEqual([1, 2]);
    expect(gameboard.grid[1][2]).toBe("h");
    expect(gameboard.recieveAttack([1, 2])).toBe(false);
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
});
