import ChessPiece from "../ChessPiece";
import Chess from "../Chess";

const BOARDSIZE = 8;

export default class Knight extends ChessPiece {
  moveOptions(
    selectedIndex: number,
    rank: number,
    file: number,
    game: Chess,
  ): { targets: number[], moves: number[] } {
    let direction = this.colorCode === 'w' ? -1 : 1;

    let moves = [];
    let targets = [];

    // Allow move forward if not occupied
    if(game.spaceFree(rank + (2 * direction), file - 1)) {
      moves.push(selectedIndex + (2 * BOARDSIZE * direction - 1));
    } else if(game.canCapture(rank + (2 * direction), file - 1, this.colorCode)) {
      targets.push(selectedIndex + (2 * BOARDSIZE * direction - 1));
    }

    // Allow move forward if not occupied
    if(game.spaceFree(rank + (2 * direction), file + 1)) {
      moves.push(selectedIndex + (2 * BOARDSIZE * direction + 1));
    } else if(game.canCapture(rank + (2 * direction), file + 1, this.colorCode)) {
      targets.push(selectedIndex + (2 * BOARDSIZE * direction + 1));
    }

    return { targets, moves };
  }
}
