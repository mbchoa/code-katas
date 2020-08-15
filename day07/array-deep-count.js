export default function deepCount(a) {
  if (!a.some((element) => Array.isArray(element))) {
    return a.length;
  }

  return (
    a.length +
    a.reduce(
      (output, el) => (Array.isArray(el) ? output + deepCount(el) : output),
      0
    )
  );
}

/**
 * @see [Better Solution](https://www.codewars.com/kata/reviews/5975bf816aec339cc000006c/groups/5975c343d4540bdc83000009)
 * function deepCount(a) {
 *   return a.reduce((sum, el) => sum + (Array.isArray(el) ? deepCount(el) : 0), a.length);
 * }
 */
