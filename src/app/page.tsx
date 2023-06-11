'use client';
import Board from '../components/Board';
import PieceDisplay from '../lib/PieceDisplay';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Card } from 'flowbite-react';

export default function Home() {
  const searchParams = useSearchParams();
  // const [selectedSquare, setSelectedSquare] = useState({coord: '', piece: ''});

  return (
    <main className="flex flex-col md:flex-row justify-around items-center h-screen">
      <div className="hidden md:flex md:flex-col">
        {/* <Card className="text-black">
          <span>To Play: { fen.turn === 'w' ? 'White' : 'Black' }</span>
          <span>Move: { fen.moveNumber }</span>
          <Button className="mt-5" onClick={() => resetAll()}>
            Reset Game
          </Button>
        </Card> */}
      </div>

      <div className="h-[50vh] w-[50vh] md:w-[90vh] md:h-[90vh]">
        <Board
          fen={searchParams.get('fen') || process.env.defaultFen}
        />
      </div>

      {/* <Card className="text-black">
        <h2 className="text-2xl my-4">Selection</h2>
        <span>Square: { selectedSquare.coord || 'None'} </span>
        <span className="mt-5">Piece:</span>
        <span>{ PieceDisplay(selectedSquare.piece, 'text')}</span>
      </Card> */}

    </main>
  )
}
