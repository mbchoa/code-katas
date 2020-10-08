export default function findShort(s) {
  return s
    .split(' ')
    .map((str) => str.length)
    .sort((a, b) => a - b)[0];
}
