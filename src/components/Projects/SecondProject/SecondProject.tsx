import React, {useEffect, useState} from 'react';
import BackToHomeHeader from "../BackToHomeHeader/BackToHomeHeader";
import styles from './second-project.module.scss'
import {Direction, getDirectionFromKey, randomIntFromInterval, useInterval} from "../../../constans";

const boardSize: number = 10


class Position {
  value: { cell: number, col: number, row: number };
  next: any;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class SnakeLimbs {
  head: Position;
  tail: Position;

  constructor(value: any) {
    const node = new Position(value)
    this.head = node;
    this.tail = node;
  }
}

const getStartingSnakeValue = (board: number[][]) => {
  const rowSize = board.length;
  const colSize = board[0].length;
  const startingRow = Math.round(rowSize / 3);
  const startingCol = Math.round(colSize / 3);
  const startingCell = board[startingRow][startingCol];
  return {
    row: startingRow,
    col: startingCol,
    cell: startingCell,
  };
};

const SecondProject = () => {
  const [score, setScore] = useState(0)
  const [board, setBoard] = useState(createBoard(boardSize))
  const [snake, setSnake] = useState(
    new SnakeLimbs(getStartingSnakeValue(board)))
  const [snakeCells, setSnakeCells] = useState(new Set([snake.head.value.cell]))
  const [foodCells, setFoodCell] = useState(snake.head.value.cell + 30)
  const [direction, setDirection] = useState(Direction.RIGHT);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useInterval(() => {
    moveSnake();
  }, 150);

  const handleKeyDown = (e: any) => {
    const newDirection = getDirectionFromKey(e.key)
    const isValidDirection = newDirection !== '';
    if (!isValidDirection) return
    setDirection(newDirection)
  }

  const moveSnake = () => {
    const currentSnakeHeadCoords = {
      row: snake.head.value.row,
      col: snake.head.value.col
    }
    const nextSnakeHeadCoords = getCoordsInDirection(currentSnakeHeadCoords, direction)
    if (isOutOfBounds(nextSnakeHeadCoords, board)) {
      gameOver()
      return;
    }
    const nextHeadCell = board[nextSnakeHeadCoords.row][nextSnakeHeadCoords.col];
    if (snakeCells.has(nextHeadCell)) {
      gameOver()
      return;
    }

    const newHead = new Position({
      row: nextSnakeHeadCoords.row,
      col: nextSnakeHeadCoords.col,
      cell: nextHeadCell,
    });
    const currentHead = snake.head;
    snake.head = newHead;
    currentHead.next = newHead;

    const newSnakeCells = new Set(snakeCells);
    newSnakeCells.delete(snake.tail.value.cell);
    newSnakeCells.add(nextHeadCell);


    snake.tail = snake.tail.next;
    if (snake.tail === null) snake.tail = snake.head;

    const foodHadEat = nextHeadCell === foodCells
    if (foodHadEat) {
      growEffect(newSnakeCells)
      foodEat(newSnakeCells)
    }
    setSnakeCells(newSnakeCells)
  }
  const growEffect = (newSnakeCells: any) => {
    const growthNodeCoords = getGrowthNodeCoords(snake.tail, direction)

    const newTailCell = board[growthNodeCoords.row][growthNodeCoords.col];
    const newTail = new Position({
      row: growthNodeCoords.row,
      col: growthNodeCoords.col,
      cell: newTailCell,
    });
    const currentTail = snake.tail;
    snake.tail = newTail;
    snake.tail.next = currentTail;

    newSnakeCells.add(newTailCell);
  }


  const foodEat = (newSnakeCells: any): void => {
    let nextFoodCell: number;
    while (true) {
      nextFoodCell = randomIntFromInterval(1, boardSize * boardSize)
      if (newSnakeCells.has(nextFoodCell) || foodCells == nextFoodCell) {
        continue
      }
      break
    }
    setScore(score + 1)
    setFoodCell(nextFoodCell)
  }

  const gameOver = () => {
    setScore(0);
    const snakeLLStartingValue = getStartingSnakeValue(board);
    setSnake(new SnakeLimbs(snakeLLStartingValue));
    setFoodCell(snakeLLStartingValue.cell + 30);
    setSnakeCells(new Set([snakeLLStartingValue.cell]));
    setDirection(Direction.RIGHT);
  }


  return (
    <div className={styles.wrap}>
      <BackToHomeHeader/>
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          <div className={styles.score}>
            Score: {score}
            <br/>
            <span>Control on Arrow buttons or WASD</span>
          </div>
          <div className={styles.main}>
            <div className={styles.board}>
              {board.map((row, rowId) => (
                <div key={rowId} className={styles.row}>
                  {row.map((cellValue: number, cellId: number) => {
                    return (
                      <div key={cellId}
                           className={`
                       ${styles.cell} 
                       ${foodCells == cellValue ? styles.foodCell : ""}
                       ${snakeCells.has(cellValue) ? styles.snakeCell : ""} 
                       `}></div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.upper}>
              <div onClick={() => setDirection(Direction.UP)}>↑</div>
            </div>
            <div className={styles.lower}>
              <div onClick={() => setDirection(Direction.LEFT)}>←</div>
              <div onClick={() => setDirection(Direction.DOWN)}>↓</div>
              <div onClick={() => setDirection(Direction.RIGHT)}>→</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const createBoard = (boardSize: number) => {
  let counter: number = 1;
  const board: any[] = []
  for (let row: number = 0; row < boardSize; row++) {
    const currentRow: number[] = []
    for (let col: number = 0; col < boardSize; col++) {
      currentRow.push(counter++)
    }
    board.push(currentRow)
  }
  return board
};


const getReverseDirection = (direction: string) => {
  switch (direction) {
    case Direction.UP: {
      return Direction.DOWN
    }
    case Direction.LEFT: {
      return Direction.RIGHT
    }
    case Direction.RIGHT: {
      return Direction.LEFT
    }
    case Direction.DOWN: {
      return Direction.UP
    }
    default:
      return ''
  }
};

const getCoordsInDirection = (coords: any, direction: any) => {
  switch (direction) {
    case Direction.LEFT: {
      return {
        row: coords.row - 1,
        col: coords.col
      };
    }
    case Direction.UP: {
      return {
        row: coords.row,
        col: coords.col - 1
      };
    }
    case Direction.DOWN: {
      return {
        row: coords.row,
        col: coords.col + 1
      };
    }
    case Direction.RIGHT: {
      return {
        row: coords.row + 1,
        col: coords.col
      };
    }
    default:
      return {
        row: coords.row,
        col: coords.col
      }
  }
};

const isOutOfBounds = (cords: any, board: number[][]): boolean => {
  const {row, col} = cords;
  if (row < 0 || col < 0) return true;
  return row >= board.length || col >= board[0].length;
};

const getNextNodeDirection = (node: Position, currentDirection: string) => {
  if (node.next === null) return currentDirection;
  const {row: currentRow, col: currentCol} = node.value;
  const {row: nextRow, col: nextCol} = node.next.value;
  if (nextCol === currentCol && nextRow === currentRow + 1) {
    return Direction.RIGHT;
  }
  if (nextCol === currentCol && nextRow === currentRow - 1) {
    return Direction.LEFT;
  }
  if (nextRow === currentRow && nextCol === currentCol + 1) {
    return Direction.DOWN;
  }
  if (nextRow === currentRow && nextCol === currentCol - 1) {
    return Direction.UP;
  }

  return '';
};

const getGrowthNodeCoords = (snakeTail: Position, currentDirection: string) => {
  const tailNextNodeDirection = getNextNodeDirection(snakeTail, currentDirection,);
  const growthDirection = getReverseDirection(tailNextNodeDirection);
  const currentTailCoords = {
    row: snakeTail.value.row,
    col: snakeTail.value.col,
  };
  return getCoordsInDirection(currentTailCoords, growthDirection);
};

export default SecondProject;