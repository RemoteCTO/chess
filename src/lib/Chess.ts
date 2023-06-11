import FenParser from '@chess-fu/fen-parser';
import ChessPiece from './ChessPiece';

export default class Chess {
  fen: FenParser;

  constructor (props) {
    this.fen = new FenParser(props.fen);
  }

  get ranks () {
    return this.fen.ranks;
  }

  optionsForSquare (selectedIndex: number): {
    targets: number[],
    moves: number[]
  } {
    let options = { targets: [], moves: [] };

    // No piece selected
    if (selectedIndex === -1) { return options; }

    let selectedRank = Math.floor(selectedIndex / 8);
    let selectedFile = selectedIndex % 8;

    let piece = new ChessPiece(this.fen.ranks[selectedRank][selectedFile]);

    // Can't move opponents pieces
    if (!this.isMyPiece(piece)) { return options; }
    if(piece.type === '-') { return options; }

    options.moves = [selectedIndex - 8];
    options.targets = [selectedIndex - 16];

    return options;
  }

  isMyPiece (piece: ChessPiece): boolean {
    return piece.colorCode === this.fen.turn;
  }
}
