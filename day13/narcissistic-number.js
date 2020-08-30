export default function narcissistic(value) {
  const tokenized = value.toString().split('');
  const power = tokenized.length;
  const narcSum = tokenized.reduce(
    (sum, digitStr) => sum + parseInt(digitStr) ** power,
    0
  );
  return narcSum === value;
}
