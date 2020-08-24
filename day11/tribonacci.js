export default function tribonacci(signature, n) {
  const cache = {};

  function valueOfTrib(sig, m) {
    if (m === 0) return [];
    if (m < 4) return sig[m - 1];
    if (cache[m]) return cache[m];
    cache[m] =
      valueOfTrib(sig, m - 3) +
      valueOfTrib(sig, m - 2) +
      valueOfTrib(sig, m - 1);
    return cache[m];
  }

  const output = [];
  for (let i = 1; i <= n; i++) {
    output.push(valueOfTrib(signature, i));
  }
  return output;
}
