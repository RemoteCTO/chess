export default function PieceDisplay(pieceRef, type='icon') {
  const icons = {
    'P': '♟',
    'R': '♜',
    'N': '♞',
    'B': '♝',
    'Q': '♛',
    'K': '♚',
    'p': '♙',
    'r': '♖',
    'n': '♘',
    'b': '♗',
    'q': '♕',
    'k': '♔',
    '-': ''
  };

  const text = {
    'P': 'Black Pawn',
    'R': 'Black Rook',
    'N': 'Black Knight',
    'B': 'Black Bishop',
    'Q': 'Black Queen',
    'K': 'Black King',
    'p': 'White Pawn',
    'r': 'White Rook',
    'n': 'White Knight',
    'b': 'White Bishop',
    'q': 'White Queen',
    'k': 'White King',
    '-': 'None'
  };

  if (type === 'icon') { return icons[pieceRef]; }
  if (type === 'text') { return text[pieceRef]; }
  return '';
}
