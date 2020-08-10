export default function permutations(string) {
  const output = new Set();

  function permutationsRec(soFar, remaining) {
    if (remaining.length === 0) {
      output.add(soFar);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const next = `${soFar}${remaining[i]}`;
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      permutationsRec(next, newRemaining);
    }
  }

  permutationsRec("", string);
  return [...output];
}

/**
 * a -> ab -> abc -> abcd
 *         -> abd => abdc
 */
