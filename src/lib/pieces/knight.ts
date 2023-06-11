import ChessPiece from "../ChessPiece";
import Chess from "../Chess";
export default class Knight extends ChessPiece {
  readonly MOVE_DESCRIPTOR = {
    directions: [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2],
    ],
    maxSteps: 1,
  };

  moveOptions(
    selectedIndex: number,
    rank: number,
    file: number,
    game: Chess,
  ): { targets: number[], moves: number[] } {
    return this.baseMoveOptions(
      selectedIndex, rank, file, game, this.MOVE_DESCRIPTOR
    );
  }
}
