import ChessPiece from "../ChessPiece";
import Chess from "../Chess";

const BOARDSIZE = 8;

export default class Pawn extends ChessPiece {
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
    if(game.spaceFree(rank + (1 * direction), file)) {
      moves.push(selectedIndex + (1 * BOARDSIZE * direction));
    }

    // Allow move forward 2 if not occupied and not moved
    if(!this.hasMoved(rank) &&
      game.spaceFree(rank + (2 * direction), file)) {
      moves.push(selectedIndex + (2 * BOARDSIZE * direction));
    }

    // Check capture targets
    if(game.canCapture(rank + 1 * direction, file - 1, this.colorCode)) {
      targets.push(selectedIndex + (1 * BOARDSIZE * direction) - 1);
    }

    if(game.canCapture(rank + 1 * direction, file + 1, this.colorCode)) {
      targets.push(selectedIndex + (1 * BOARDSIZE * direction) + 1);
    }

    return { targets, moves };
  }

  hasMoved(rank: number): Boolean {
    return this.colorCode === 'w' ? rank !== 6 : rank !== 1;
  }
}
