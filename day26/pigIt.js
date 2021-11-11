export default function pigIt(str) {
  return str
    .split(' ')
    .map((word) => (word.match(/\W/g) ? word : word.slice(1) + word[0] + 'ay'))
    .join(' ');
}
