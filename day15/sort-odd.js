export default function sortArray(array) {
  const oddsSortedDesc = array
    .filter((digit) => digit % 2 !== 0)
    .sort((a, b) => b - a);
  const removedOdds = array.map((digit) => (digit % 2 === 0 ? digit : 'odd'));
  return removedOdds.map((digit) =>
    digit === 'odd' ? oddsSortedDesc.pop() : digit
  );
}
