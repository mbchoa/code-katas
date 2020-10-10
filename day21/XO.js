export default function XO(str) {
  const xMatch = str.match(/x+/gi);
  const oMatch = str.match(/o+/gi);
  return (
    (xMatch && xMatch.join('').length) === (oMatch && oMatch.join('').length)
  );
}
