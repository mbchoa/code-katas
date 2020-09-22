export default function getMiddle(s) {
  if (s.length % 2 === 0) {
    const leftIdx = s.length / 2 - 1;
    return s.slice(leftIdx, leftIdx + 2);
  }
  return s[Math.floor(s.length / 2)];
}
