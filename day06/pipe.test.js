import "./pipe";

test("base case", () => {
  const addOne = function (e) {
    return e + 1;
  };
  const square = function (e) {
    return e * e;
  };
  const expected = [4, 9, 16, 25, 36];
  const actual = [1, 2, 3, 4, 5].map(addOne.pipe(square));
  expect(actual).toEqual(expected);
});
