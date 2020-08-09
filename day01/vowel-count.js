export default function getCount(str) {
  return str
    .split("")
    .filter((char) => ["a", "e", "i", "o", "u"].includes(char)).length;
}
