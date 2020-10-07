export default function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .map((str) => parseInt(str, 10) ** 2)
      .join(''),
    10
  );
}
