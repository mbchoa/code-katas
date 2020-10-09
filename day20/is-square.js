export default function isSquare(n) {
  if (n < 0) {
    return false;
  }
  const sqrt = Math.floor(Math.sqrt(n));
  return sqrt * sqrt === n;
}
