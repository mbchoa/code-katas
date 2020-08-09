export default function worse(s) {
  function repeater(char, numRepeat) {
    return numRepeat === 1
      ? char.toUpperCase()
      : `${repeater(char, numRepeat - 1)}${char}`;
  }

  return s
    .split("")
    .map((char, index) => repeater(char.toLowerCase(), index + 1))
    .join("-");
}

/**
 * @see [Better Codewars Solution](https://www.codewars.com/kata/reviews/5667eafcfde9ebbd5100002e/groups/57b05e106b34fa14e10000b8)
 */
// function better(s) {
//   return [...s].map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join('-');
// }
