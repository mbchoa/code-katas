export default function longestConsec(strArr, k) {
  if (k < 0) {
    return '';
  }

  let longestWord = '';
  for (let i = 0; i < strArr.length - k + 1; i++) {
    const concatenatedStringPair = strArr.slice(i, i + k).join('');
    if (concatenatedStringPair.length > longestWord.length) {
      longestWord = concatenatedStringPair;
    }
  }
  return longestWord;
}
