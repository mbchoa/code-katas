const LINE_SUM = 45;

function rotateBoard(board) {
  return board
    .reverse()[0]
    .map((_column, index) => board.map((row) => row[index]));
}

function areRowsValid(board) {
  return board.every((row) => {
    return row.reduce((sum, el) => sum + el, 0) === LINE_SUM;
  });
}

function areColumnsValid(board) {
  // clone and rotate board
  const rotatedBoard = rotateBoard(board);
  return areRowsValid(rotatedBoard);
}

function isSubgridValid(rowStart, colStart, board) {
  const lineElements = [];
  for (let row = rowStart; row < rowStart + 3; row++) {
    for (let col = colStart; col < colStart + 3; col++) {
      lineElements.push(board[row][col]);
    }
  }
  return lineElements.reduce((output, el) => output + el, 0) === LINE_SUM;
}

function areSubgridsValid(board) {
  return (
    isSubgridValid(0, 0, board) &&
    isSubgridValid(0, 3, board) &&
    isSubgridValid(0, 6, board) &&
    isSubgridValid(3, 0, board) &&
    isSubgridValid(3, 3, board) &&
    isSubgridValid(3, 6, board) &&
    isSubgridValid(6, 0, board) &&
    isSubgridValid(6, 3, board) &&
    isSubgridValid(6, 6, board)
  );
}

function doesBoardContainZeros(board) {
  return board.some((row) => row.some((el) => el === 0));
}

export default function validSolution(board) {
  return (
    !doesBoardContainZeros(board) &&
    areRowsValid(board) &&
    areColumnsValid(board) &&
    areSubgridsValid(board)
  );
}
