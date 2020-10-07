export default function highAndLow(numbers) {
  const parsed = numbers
    .split(' ')
    .map((str) => parseInt(str, 10))
    .sort((a, b) => a - b);
  return [parsed[parsed.length - 1], parsed[0]].join(' ');
}
