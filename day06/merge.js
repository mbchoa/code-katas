export default function mergesorted(a, b) {
  let sorted = [];

  while (a.length && b.length) {
    if (a[0] < b[0]) {
      sorted = [...sorted, a.shift()];
    } else {
      sorted = [...sorted, b.shift()];
    }
  }

  return [...sorted, ...a, ...b];
}
