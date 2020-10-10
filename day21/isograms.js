export default function isIsogram(str) {
  return (
    [...new Set(str.toLowerCase().split(''))].join('') === str.toLowerCase()
  );
}
