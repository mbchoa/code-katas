export default function isPangram(str) {
  return new Set(str.toLowerCase().replace(/\W|\d/g, '').split('')).size === 26;
}
