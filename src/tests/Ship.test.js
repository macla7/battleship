import Ship from "../logic/Ship";

describe("createShip", () => {
  let ship;
  beforeEach(() => {
    ship = Ship(2, "down", [2, 2]);
  });

  test("ship has getter for length prop", () => {
    expect(ship.getLength()).toBe(2);
  });

  test("ship has getter for hits prop", () => {
    expect(ship.getHits()).toEqual(expect.arrayContaining([]));
  });

  test("ship has getter for sunk prop", () => {
    expect(ship.getSunk()).toBe(false);
  });

  test("ship has getter for squares prop", () => {
    expect(ship.getSquares()).toEqual(
      expect.arrayContaining([
        [2, 2],
        [2, 1],
      ])
    );
    expect(ship.getSquares().length).toBe(ship.getLength());
  });

  test("hit method adds x&y to hits prop", () => {
    ship.hit([2, 2]);
    expect(ship.getHits()).toEqual(expect.arrayContaining([[2, 2]]));
  });

  test("ship has been sunk", () => {
    ship.hit([2, 2]);
    ship.hit([2, 1]);
    ship.isSunk();
    expect(ship.getSunk()).toBe(true);
  });
});
