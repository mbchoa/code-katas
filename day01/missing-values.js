export default function solve(arr) {
  const map = arr.reduce(
    (output, value) => ({
      ...output,
      [value]: output[value] ? output[value] + 1 : 1,
    }),
    {}
  );

  const x = parseInt(Object.entries(map).filter(([, value]) => value === 1)[0]);
  const y = parseInt(Object.entries(map).filter(([, value]) => value === 2)[0]);
  return x * x * y;
}
