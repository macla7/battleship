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

  test("recieveAttack sends mutates grid & hit command IS sent", () => {
    const mockHitShip = jest.fn();
    gameboard.recieveAttack([2, 2], mockHitShip);

    expect(mockHitShip.mock.calls.length).toBe(1);
    expect(gameboard.grid[2][2]).toBe("h");
  });

  test("recieveAttack sends mutates grid & hit command NOT sent", () => {
    const mockHitShip = jest.fn();
    gameboard.recieveAttack([1, 2], mockHitShip);

    expect(mockHitShip.mock.calls.length).toBe(0);
    expect(gameboard.grid[1][2]).toBe("h");
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
