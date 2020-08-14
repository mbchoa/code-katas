import mergesorted from "./merge";

describe("base cases", () => {
  test("case #1", () => {
    expect(mergesorted([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("case #2", () => {
    expect(mergesorted([1, 2], [3])).toEqual([1, 2, 3]);
  });

  test("case #3", () => {
    expect(mergesorted([1], [2, 3])).toEqual([1, 2, 3]);
  });
});
