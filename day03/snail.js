const RIGHT = 0;
const DOWN = 1;
const LEFT = 2;
const UP = 3;

export default function snail(array) {
  function snailRec(newGrid, direction) {
    if (newGrid.length === 1 && newGrid[0].length <= 1) {
      return newGrid[0];
    }

    // check direction
    switch (direction) {
      // remove first row of matrix and append to output
      case RIGHT:
        return [...newGrid[0], ...snailRec(newGrid.slice(1), DOWN)];
      // remove last elements from remaining rows
      case DOWN:
        return [
          ...newGrid.flatMap((row) => row.slice(-1)),
          ...snailRec(
            newGrid.map((row) => row.slice(0, -1)),
            LEFT
          ),
        ];
      // remove last row of matrix and append reversed array to output
      case LEFT:
        return [
          ...newGrid.slice(-1)[0].reverse(),
          ...snailRec(newGrid.slice(0, -1), UP),
        ];
      // remove first elements from remaining rows and append reversed array to output
      case UP:
        return [
          ...newGrid.flatMap((row) => row[0]).reverse(),
          ...snailRec(
            newGrid.map((row) => row.slice(1)),
            RIGHT
          ),
        ];
    }
  }

  return snailRec(array, RIGHT);
}
