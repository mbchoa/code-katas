export default function expandedForm(num) {
  return num
    .toString()
    .split('')
    .reverse()
    .map((digit, index) => digit * 10 ** index)
    .filter((digit) => digit > 0)
    .reverse()
    .join(' + ');
}
