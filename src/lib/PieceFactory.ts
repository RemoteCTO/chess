import ChessPiece from "./ChessPiece";
import Pawn from "./pieces/pawn";
import Bishop from "./pieces/bishop";
import Knight from "./pieces/knight";
import Blank from "./pieces/blank";
import Queen from "./pieces/queen";
import King from "./pieces/king";
import Rook from "./pieces/rook";

export default class PieceFactory {
  static createPiece(props: { code: string }): ChessPiece {
    switch (props.code.toLowerCase()) {
      case 'p': return new Pawn(props.code);
      case 'b': return new Bishop(props.code);
      case 'n': return new Knight(props.code);
      case 'q': return new Queen(props.code);
      case 'k': return new King(props.code);
      case 'r': return new Rook(props.code);
      default: return new Blank(props.code);
    }
  }
}
