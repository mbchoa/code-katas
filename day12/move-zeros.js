export default function moveZeros(arr) {
  return arr
    .filter((char) => char !== 0)
    .concat(arr.filter((char) => char === 0));
}
