export default function anagram(word, words) {
  const sortChars = (word) =>
    [...word].sort((a, b) => a.localeCompare(b)).join();
  const isAnagram = (a, b) => sortChars(a) === sortChars(b);
  return words.filter((testWord) => isAnagram(word, testWord));
}
