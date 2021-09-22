import Gameboard from "../logic/Gameboard";
import Ship from "../logic/Ship";

describe("create Gameboard", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = Gameboard(Ship);
    gameboard.placeShip(2, "down", [2, 2]);
    return gameboard;
  });

  test("gameboard can place ship", () => {
    expect(gameboard.grid[2][3]).toBe("e");
    expect(gameboard.grid[2][2]).toBe(1);
    expect(gameboard.grid[2][1]).toBe(1);
    expect(gameboard.grid[2][0]).toBe("e");
    expect(gameboard.getShips().length).toBe(1);
  });

  test("recieveAttack mutates grid, sends hit command, returns true", () => {
    const mockHitShip = jest.fn();
    expect(gameboard.recieveAttack([2, 2], mockHitShip)).toBe(true);

    expect(mockHitShip.mock.calls.length).toBe(1);
    expect(gameboard.grid[2][2]).toBe("h");
  });

  test("recieveAttack mutates grid, returns true", () => {
    const mockHitShip = jest.fn();
    expect(gameboard.recieveAttack([1, 2], mockHitShip)).toBe(true);

    expect(mockHitShip.mock.calls.length).toBe(0);
    expect(gameboard.grid[1][2]).toBe("h");
  });

  test("recieveAttack returns false if already hit", () => {
    const mockHitShip = jest.fn();
    gameboard.recieveAttack([1, 2]);
    expect(gameboard.grid[1][2]).toBe("h");
    expect(gameboard.recieveAttack([1, 2], mockHitShip)).toBe(false);
    expect(mockHitShip.mock.calls.length).toBe(0);
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
