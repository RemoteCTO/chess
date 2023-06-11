import Chess from './Chess';

const BOARDSIZE = 8;
export default abstract class ChessPiece {
  code: string;

  constructor(code: string) {
    this.code = code;
  }

  get colorCode() {
    return this.code === this.code.toUpperCase() ? 'w' : 'b';
  }

  get type() {
    return this.code.toLowerCase();
  }

  get isBlank() {
    return this.code === '-';
  }

  abstract moveOptions(
    selectedIndex: number,
    rank: number,
    file: number,
    game: Chess,
  ): { targets: number[], moves: number[] };

  protected baseMoveOptions(
    selectedIndex: number,
    rank: number,
    file: number,
    game: Chess,
    moveDescriptor: {
      directions: Array<Array<number>>,
      maxSteps?: number,
    }
  ): { targets: number[], moves: number[] } {
    let moves = [];
    let targets = [];

    moveDescriptor.directions.forEach((direction) => {
      let [rankOffset, fileOffset] = direction;
      let rankCandidate = rank + rankOffset;
      let fileCandidate = file + fileOffset;

      for(let i = 1; i <= moveDescriptor.maxSteps; i++) {
        rankCandidate = rank + rankOffset * i;
        fileCandidate = file + fileOffset * i;

        if(game.outOfBounds(rankCandidate, fileCandidate)) {
          break;
        } else if(game.canCapture(rankCandidate, fileCandidate, this.colorCode)) {
          targets.push((rankCandidate) * BOARDSIZE + fileCandidate)
          break;
        } else if(game.spaceFree(rankCandidate, fileCandidate)) {
          moves.push((rankCandidate * BOARDSIZE + fileCandidate));
        } else {
          break;
        }
      }
    });

    return { targets, moves };
  }
}
