export default function duplicateCount(text) {
  if (!text.length) return 0;

  const charMap = text
    .toLowerCase()
    .split('')
    .reduce(
      (map, char) => ({ ...map, [char]: map[char] ? map[char] + 1 : 1 }),
      {}
    );

  return Object.values(charMap).filter((charCount) => charCount > 1).length;
}
