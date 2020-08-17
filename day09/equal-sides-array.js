export default function findEvenIndex(arr) {
  const arraySum = (array) => array.reduce((sum, number) => sum + number, 0);
  for (let i = 0; i < arr.length; i++) {
    if (arraySum(arr.slice(0, i)) === arraySum(arr.slice(i + 1))) return i;
  }
  return -1;
}
