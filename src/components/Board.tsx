'use client';

import Square from './Square';
import React, { useState } from 'react';

export default function Board() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (i) => {
    setActiveIndex(i);
  };

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(
      <Square ky={i} onClick={handleClick.bind(this, i)} selected={activeIndex === i}/>
    );
  }

  return (
    <div className="m-auto board border-8 h-[32rem] w-[40rem] sm:h-[40rem] m-auto">
      {squares}
    </div>
  );
}
