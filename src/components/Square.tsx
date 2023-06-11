'use client';

import Piece from './Piece';

export default function Square(props) {
  const { rank, file, onClick, highlightState, piece } = props;

  const cheqClass = () => {
    if ((rank+file) % 2 === 0) { return 'cheq-a'; }
    return 'cheq-b';
  };

  return (
    <div
      className={`float-left w-[12.5%] h-[12.5%] flex ${highlightState} ${cheqClass()}`}
      onClick={onClick}
    >
      <div className="m-auto">
        <p className="text-4xl md:text-7xl text-rose-600 text-center">
          <Piece code={piece} />
        </p>
      </div>
    </div>
  );
}
