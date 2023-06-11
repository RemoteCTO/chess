'use client';

import Square from './Square';
import React, { useEffect, useState } from 'react';

import Chess from '../lib/Chess';

export default function Board(props: { fen: string }) {
  const ranks = '12345678';
  const files = 'abcdefgh';

  const [state, setState] = useState({
    game: new Chess({ fen: props.fen }),
    selectedIndex: -1,
  });

  const squareClicked = (index: number) => {
    setState({
      ...state,
      selectedIndex: index,
    });
  }

  const highlightStateFor = (index: number) => {
    if (index === state.selectedIndex) { return 'selected'; }

    let options = state.game.optionsForSquare(state.selectedIndex);

    if (options.targets.includes(index)) { return 'target'; }
    if (options.moves.includes(index)) { return 'available'; }
    return 'none';
  }

  return (
    <div className="board border-8 h-full w-full">
      {/* The reversal is not efficient and needs revisiting */}
      {[...state.game.ranks].map((rank, rankId) => {
        return (
          <React.Fragment key={rankId}>
            {rank.split('').map((piece, fileId) => {
              let index = rankId*8+fileId;
              return (
                <Square
                  key={Math.random() + index}
                  rank={rankId}
                  file={fileId}
                  highlightState={highlightStateFor(index)}
                  piece={piece}
                  onClick={() => squareClicked(index)}
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
