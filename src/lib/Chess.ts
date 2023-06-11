import FenParser from '@chess-fu/fen-parser';
import ChessPiece from './ChessPiece';
import PieceFactory from './PieceFactory';

export default class Chess {
  fen: FenParser;

  constructor (props) { this.fen = new FenParser(props.fen); }

  get ranks () { return this.fen.ranks; }

  optionsForSquare (selectedIndex: number): {
    targets: number[],
    moves: number[]
  } {
    let options = { targets: [], moves: [] };

    // No piece selected
    if (selectedIndex === -1) { return options; }

    let selectedRank = Math.floor(selectedIndex / 8);
    let selectedFile = selectedIndex % 8;

    let piece = this.pieceAt(selectedRank, selectedFile);

    // Can't move opponents pieces or blank spaces
    // if (!this.isMyPiece(piece)) { return options; }
    if(piece.isBlank) { return options; }

    return piece.moveOptions(
      selectedIndex,
      selectedRank,
      selectedFile,
      this
    );
  }

  isMyPiece (piece: ChessPiece): boolean {
    return piece.colorCode === this.fen.turn;
  }

  spaceFree(rank: number, file: number): boolean {
    // False if out of bounds
    if(!this.inBounds(rank, file)) { return false; }

    return this.pieceAt(rank, file).isBlank;
  }

  canCapture(rank: number, file: number, capturingColor: string): boolean {
    // False if out of bounds
    if(!this.inBounds(rank, file)) { return false; }

    let piece = this.pieceAt(rank, file);
    return piece.colorCode !== capturingColor && !piece.isBlank;
  }

  inBounds(rank: number, file: number): boolean {
    return rank >= 0 && rank < 8 && file >= 0 && file < 8;
  }

  pieceAt(rank: number, file: number): ChessPiece {
    return PieceFactory.createPiece({code: this.ranks[rank][file]});
  }
}
