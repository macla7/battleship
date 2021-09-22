import Gameboard from "../logic/Gameboard";
import Player from "../logic/Player";
import Ship from "../logic/Ship";

describe("new Player", () => {
  let player;
  let comp;
  beforeEach(() => {
    let playerBoard = Gameboard(Ship);
    let compBoard = Gameboard(Ship);
    player = Player(playerBoard, "human");
    comp = Player(compBoard, "computer");
    return player;
  });

  test("hmm", () => {});

  // These even necessary? No logic in this function so I thiiiink maybee no..?
  // test("attack returns true if square empty or ship", () => {
  //   const recieveAttack = jest.fn();
  //   recieveAttack.mockReturnValue(true);
  //   const boardMock = { recieveAttack };

  //   expect(player.attack(boardMock, [1, 1])).toBe(true);
  // });

  // test("attack returns false if square hit", () => {
  //   const recieveAttack = jest.fn();
  //   recieveAttack.mockReturnValue(false);
  //   const boardMock = { recieveAttack };

  //   expect(player.attack(boardMock, [1, 1])).toBe(false);
  // });
});
