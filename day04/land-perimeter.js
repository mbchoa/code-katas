const LAND = 'X';

function calcPerimeter(arr, [col, row]) {
  let perimeter = 4;
  // check top
  if (row !== 0 && arr[row - 1][col] === LAND) perimeter--;

  // check right
  if (col !== arr[row].length - 1 && arr[row][col + 1] === LAND) perimeter--;

  // check bottom
  if (row !== arr.length - 1 && arr[row + 1][col] === LAND) perimeter--;

  // check left
  if (col !== 0 && arr[row][col - 1] === LAND) perimeter--;

  return perimeter;
}

export default function landPerimeter(arr) {
  let totalPerimeter = 0;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === LAND) {
        totalPerimeter += calcPerimeter(arr, [col, row]);
      }
    }
  }
  return `Total land perimeter: ${totalPerimeter}`;
}
