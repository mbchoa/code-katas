class WeightedNumber {
  constructor(numberStr) {
    this.numAsString = numberStr;
    this.numAsInteger = parseInt(numberStr);
    this.weight = [...numberStr].reduce(
      (weight, digit) => weight + parseInt(digit),
      0
    );
  }

  static sortByWeight(weightedNumbersArr) {
    return weightedNumbersArr.sort((a, b) => {
      if (a.weight === b.weight) {
        if (a.numAsString < b.numAsString) {
          return -1;
        }
        if (a.numAsString > b.numAsString) {
          return 1;
        }
        return 0;
      }
      return a.weight - b.weight;
    });
  }
}

export default function orderWeight(string) {
  if (!string.length) return string;
  const weightNumbers = string
    .trim()
    .split(" ")
    .map((str) => new WeightedNumber(str.trim()));
  return WeightedNumber.sortByWeight(weightNumbers)
    .map((weightedNumber) => weightedNumber.numAsInteger.toString())
    .join(" ");
}

/**
 * Better solution
 *
 * function orderWeight(strng) {
 *   const sum = (str) => str.split('').reduce((sum, el) => (sum + (+el)), 0);
 *   function comp(a, b) {
 *     const sumA = sum(a);
 *     const sumB = sum(b);
 *     return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
 *   };
 *   return strng.split(' ').sort(comp).join(' ');
 * }
 */
