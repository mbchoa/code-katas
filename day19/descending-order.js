export default function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split('')
      .sort((a, b) => b.localeCompare(a))
      .join(''),
    10
  );
}
