import ChessPiece from "../ChessPiece";
import Chess from "../Chess";
export default class Bishop extends ChessPiece {
  readonly MOVE_DESCRIPTOR = {
    directions: [[1, 1], [1, -1], [-1, 1], [-1, -1]],
    maxSteps: 7,
  };

  moveOptions(
    selectedIndex: number,
    rank: number,
    file: number,
    game: Chess,
  ): { targets: number[], moves: number[] } {
    return this.baseMoveOptions(
      selectedIndex,
      rank,
      file,
      game,
      this.MOVE_DESCRIPTOR,
    );
  }
}
