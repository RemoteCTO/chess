import ChessPiece from "../ChessPiece";
import Chess from "../Chess";

const DIRECTIONS = [[-1, -1], [-1, 1], [1, -1], [1, 1]];

export default class Bishop extends ChessPiece {
  moveOptions(
    selectedIndex: number,
    rank: number,
    file: number,
    game: Chess,
  ): { targets: number[], moves: number[] } {
    let moves = [];
    let targets = [];

    DIRECTIONS.map(direction => {

      let [rankDirection, fileDirection] = direction;

      while (game.spaceFree(rank, file)) {
        moves.push(rank * 8 + file);
        [rank, file] = [rank + rankDirection, file + fileDirection];
      }

      if (game.canCapture(rank, file, this.colorCode)) {
        targets.push(rank * 8 + file);
      }
    });

    return { targets, moves };
  }
}
