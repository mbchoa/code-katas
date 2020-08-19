export default function longest(str) {
  const lengthRanges = [];
  let i = 1,
    anchor = 0;

  for (i; i < str.length; i++) {
    if (str[i] >= str[i - 1]) {
      continue;
    } else {
      lengthRanges.push([anchor, i]);
      anchor = i;
    }
  }
  lengthRanges.push([anchor, i]);

  const calculatedRangeLengths = lengthRanges.map(
    ([lower, upper]) => upper - lower
  );
  const index = calculatedRangeLengths.indexOf(
    Math.max(...calculatedRangeLengths)
  );
  const [lower, upper] = lengthRanges[index];
  return str.slice(lower, upper);
}

/**
 * @see [Clever Solution](https://www.codewars.com/kata/reviews/5a80d3355255b3fbfb003f50/groups/5a80d335fbaf550a5600120a)
 */
