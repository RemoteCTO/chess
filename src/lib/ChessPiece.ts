import Chess from './Chess';
export default abstract class ChessPiece {
  code: string;

  constructor(code: string) {
    this.code = code;
  }

  get colorCode() {
    return this.code === this.code.toUpperCase() ? 'w' : 'b';
  }

  get type() {
    return this.code.toLowerCase();
  }

  get isBlank() {
    return this.code === '-';
  }

  abstract moveOptions(
    selectedIndex: number,
    rank: number,
    file: number,
    game: Chess,
  ): { targets: number[], moves: number[] };
}
