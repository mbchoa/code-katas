export default function solve(number) {
  let output = 0;
  for (let i = 1; i < number; i++) {
    const isMultiple = i % 3 === 0 || i % 5 === 0;
    if (isMultiple) {
      output += i;
    }
  }
  return output;
}
