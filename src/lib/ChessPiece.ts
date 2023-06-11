export default class ChessPiece {
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
}
