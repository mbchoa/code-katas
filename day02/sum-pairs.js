export default function sum_pairs(ints, s) {
  const set = new Set();
  for (let i = 0; i < ints.length; i++) {
    const otherPair = s - ints[i];
    if (set.has(otherPair)) {
      return [otherPair, ints[i]];
    }
    set.add(ints[i]);
  }
}
