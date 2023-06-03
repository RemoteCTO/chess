'use client';

import Square from './Square';
import React, { useState } from 'react';

export default function Board() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [game, setGame] = useState('rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR');
  const [availableMoves, setAvailableMoves] = useState([]);

  const handleClick = (i) => {
    setActiveIndex(i);
    setAvailableMoves(calculateAvailableMoves(game[i], i));
  };

  const calculateAvailableMoves = (piece, i) => {
    let color = piece.toUpperCase() === piece ? 'white' : 'black';

    if (piece.toUpperCase() === 'P') {
      if (color === 'white') {
        return [i-8, i-16];
      } else {
        return [i+8, i+16];
      }
    } else {
      return [];
    }
  };

  const squares = [];

  [...game].forEach((piece, i) => {
    squares.push(
      <Square
        key={i}
        ky={i}
        onClick={handleClick.bind(this, i)}
        selected={activeIndex === i}
        available={availableMoves.includes(i)}
        piece={piece}
      />
    );
  });

  return (
    <div className="board border-8 h-full w-full">
      {squares}
    </div>
  );
}
