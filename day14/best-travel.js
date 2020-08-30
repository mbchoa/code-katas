export default function chooseBestSum(t, k, ls) {
  const sumArr = (arr) => arr.reduce((result, value) => result + value, 0);
  function chooseBestSumWorker(soFar, distances, bestSums) {
    if (soFar.length === k) {
      const sum = sumArr(soFar);
      if (sum <= t) {
        bestSums.push(sum);
      }
    } else {
      for (let i = 0; i < distances.length; i++) {
        const next = [...soFar, distances[i]];
        const remainingDistances = distances.slice(i + 1);
        chooseBestSumWorker(next, remainingDistances, bestSums);
      }
    }
  }

  const bestSumsArr = [];
  const sortedByGreatestDistance = [...ls].sort().reverse();
  chooseBestSumWorker([], sortedByGreatestDistance, bestSumsArr);
  bestSumsArr.sort((a, b) => b - a);
  return bestSumsArr[0] ? bestSumsArr[0] : null;
}
