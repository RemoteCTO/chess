'use client';

export default function Square(props) {
  const { ky, onClick, selected, available, piece } = props;

  const borderClass = () => {
    if (selected) {
      if (piece !== '.') {
        return 'border-4 border-green-600';
      } else {
        return 'border-4 border-lime-500';
      }
    } else {
      if (available) {
        return 'border-4 border-lime-300';
      } else {
        return 'border-1';
      }
    }
  };

  const colorClass = () => {
    if (selected) {
      return 'bg-lime-500';
    } else {
      if (available) {
        return 'bg-lime-300 hover:bg-sky-200';
      } else {
        if (ky / 8 % 2 < 1) {
          if (ky % 2 < 1) {
            return 'bg-lime-800';
          } else {
            return 'bg-lime-100';
          }
        } else {
          if (ky % 2 < 1) {
            return 'bg-lime-100';
          } else {
            return 'bg-lime-800';
          }
        }
      }
    }
  };

  const nameForPiece = (piece) => {
    switch (piece.toUpperCase()) {
      case 'P':
        return 'Pawn';
      case 'R':
        return 'Rook';
      case 'N':
        return 'Knight';
      case 'B':
        return 'Bishop';
      case 'Q':
        return 'Queen';
      case 'K':
        return 'King';
      default:
        return '';
    }
  };

  return (
    <div
      className={`float-left w-[12.5%] h-[12.5%] flex ${colorClass()} ${borderClass()}`}
      onClick={onClick}
    >
      <div className="m-auto">
        <p className="text-rose-600 text-center">{nameForPiece(piece)}</p>
      </div>
    </div>
  );
}
