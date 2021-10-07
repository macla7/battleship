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

  // Dont think it's neceesary to test player.attack, as it is purely another objects public method. No logic.
  // It is tested in gameboard essentially..

  // test("attack returns 'h' if square empty", () => {
  //   const recieveAttack = jest.fn();
  //   recieveAttack.mockReturnValue('h');
  //   const boardMock = { recieveAttack };

  //   expect(player.attack(boardMock, [1, 1])).toBe('h');
  // });

  test("attackRandom returns hitArr of given length", () => {
    const onlyIncLetter = jest.fn();
    onlyIncLetter.mockReturnValue(false);
    const recieveAttack = jest.fn();
    recieveAttack.mockReturnValue(true);
    const enemyBoard = { onlyIncLetter, recieveAttack };

    expect(player.randomAttack(enemyBoard, 2)).toHaveLength(2);
    expect(player.randomAttack(enemyBoard, 1)).not.toHaveLength(2);
  });
});
