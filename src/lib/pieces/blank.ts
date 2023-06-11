import ChessPiece from "../ChessPiece";
import Chess from "../Chess";

export default class Blank extends ChessPiece {
  get isBlank(): boolean {
    return true;
  }

  moveOptions(
    selectedIndex: number,
    rank: number,
    file: number,
    game: Chess,
  ): { targets: number[], moves: number[] } {
    return { targets: [], moves: [] };
  }
}
