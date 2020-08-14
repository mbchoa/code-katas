export default function findOutlier(integers) {
  const dominantIntegerType =
    integers.slice(0, 3).filter((number) => number % 2 === 0).length >= 2
      ? 'even'
      : 'odd';
  return integers.filter((number) =>
    dominantIntegerType === 'even' ? number % 2 !== 0 : number % 2 === 0
  )[0];
}

/**
 * Better solution
 *
 * function findOutlier(integers) {
 *   const evens = integers.filter(num => num%2 === 0);
 *   const odds = integers.filter(num => num%2 !== 0);
 *   return evens.length === 1 ? evens[0] : odds[0];
 * }
 */
