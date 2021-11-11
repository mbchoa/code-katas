function buildFloor(level, numFloors) {
  const floorWidthAtLevel = 2 * level + 1;
  const maxFloorWidth = 2 * (numFloors - 1) + 1;
  const floorPadding = (maxFloorWidth - floorWidthAtLevel) * 0.5;
  return '*'
    .repeat(floorWidthAtLevel)
    .padStart(floorPadding + floorWidthAtLevel)
    .padEnd(floorPadding * 2 + floorWidthAtLevel);
}

export default function buildTower(numFloors) {
  return [...Array(numFloors).keys()].map((level) =>
    buildFloor(level, numFloors)
  );
}
