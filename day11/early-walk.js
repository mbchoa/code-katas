export default function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  const numNorth = walk.filter((dir) => dir === 'n').length;
  const numSouth = -1 * walk.filter((dir) => dir === 's').length;
  const numWest = walk.filter((dir) => dir === 'w').length;
  const numEast = -1 * walk.filter((dir) => dir === 'e').length;
  return numNorth + numSouth === 0 && numWest + numEast === 0;
}
