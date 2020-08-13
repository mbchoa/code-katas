export default function findOutlier(integers) {
  function rec(arr) {
    if (arr.length === 1) {
      switch (integerType) {
        case "even":
          return arr[0] % 2 === 0 ? undefined : arr[0];
        case "odd":
          return arr[0] % 2 !== 0 ? undefined : arr[0];
        default:
          break;
      }
      return arr[0];
    }

    const mid = arr.length / 2;
    const leftArr = arr.slice(0, mid);
    const leftSum = leftArr.reduce((result, num) => result + num, 0);
    if (
      (integerType === "even" && leftSum % 2 !== 0) ||
      (integerType === "odd" && leftSum % 2 === 0)
    ) {
      const possibleInteger = rec(leftArr);
      if (possibleInteger !== undefined) {
        return possibleInteger;
      }
    }
    const possibleInteger = rec(arr.slice(mid));
    if (possibleInteger !== undefined) {
      return possibleInteger;
    }
  }

  // determine dominant integer type in array
  const integerType =
    integers.slice(0, 3).filter((num) => num % 2 === 0).length >= 2
      ? "even"
      : "odd";
  return rec(integers);
}
