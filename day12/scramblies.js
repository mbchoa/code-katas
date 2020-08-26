export default function scramble(str1, str2) {
  let str1Copy = str1;
  for (let i = 0; i < str2.length; i++) {
    const charIndex = str1Copy.indexOf(str2[i]);
    if (charIndex < 0) return false;
    str1Copy = str1Copy.slice(0, charIndex) + str1Copy.slice(charIndex + 1);
  }
  return true;
}
