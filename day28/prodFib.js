export default function productFib(prod) {
  function fibGenerator(target, f = 0, fPlusOne = 1) {
    if (f * fPlusOne > target) {
      return [f, fPlusOne, false];
    }

    if (f * fPlusOne === target) {
      return [f, fPlusOne, true];
    }

    return fibGenerator(target, fPlusOne, f + fPlusOne);
  }

  return fibGenerator(prod);
}
