export default function persistence(num) {
  let numMultiply = 0;
  if (num < 10) return numMultiply;
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((product, char) => product * +char, 1);
    numMultiply++;
  }
  return numMultiply;
}
