const STAIRS = 1;
const START = 2;

function findStartingFloor(carpark) {
  return carpark.findIndex((floor) => floor.indexOf(START) >= 0);
}

function getStepsWalkedToStaircase(floor, floorPosition) {
  return floor.indexOf(STAIRS) - floorPosition;
}

export default function escape(carpark) {
  const directions = [];
  let currentFloorLevel = findStartingFloor(carpark);
  let currentFloorPosition = carpark[currentFloorLevel].indexOf(START);
  while (currentFloorLevel < carpark.length - 1) {
    const numSteps = getStepsWalkedToStaircase(
      carpark[currentFloorLevel],
      currentFloorPosition
    );
    // move left
    if (numSteps < 0) {
      directions.push(`L${Math.abs(numSteps)}`);
      directions.push("D1");
    }
    // move right
    if (numSteps > 0) {
      directions.push(`R${Math.abs(numSteps)}`);
      directions.push("D1");
    }
    // move down
    if (numSteps === 0) {
      const lastDirectionAdded = directions[directions.length - 1];
      if (lastDirectionAdded[0] === "D") {
        directions.pop();
        directions.push(`D${+lastDirectionAdded[1] + 1}`);
      } else {
        directions.push("D1");
      }
    }
    // adjust current floor position and go to next floor level
    currentFloorPosition += numSteps;
    currentFloorLevel++;
  }

  const stairPos = carpark[currentFloorLevel].length - 1;
  const numSteps = stairPos - currentFloorPosition;
  if (numSteps > 0) {
    directions.push(`R${numSteps}`);
  }

  return directions;
}
