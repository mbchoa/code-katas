export default function digital_root(n) {
  return n < 10
    ? n
    : digital_root(
        n
          .toString()
          .split("")
          .reduce((sum, strVal) => sum + parseInt(strVal), 0)
      );
}

/**
 * This can be solved using number theory.
 * @see [Number Theory Solution](https://www.codewars.com/kata/541c8630095125aba6000c00/solutions/javascript)
 *
 * function digital_root(n) {
 *  return (n - 1) % 9 + 1
 * }
 */
