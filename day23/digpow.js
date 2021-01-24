export default function digPow(n, p) {
  const digitsArray = toDigitsArray(n);
  const numberToTest = digitsArray.reduce(
    (total, curr, index) => total + curr ** (index + p),
    0
  );
  return numberToTest % n === 0 ? numberToTest / n : -1;
}

export function toDigitsArray(n) {
  return n
    .toString()
    .split('')
    .map((num) => parseInt(num));
}
