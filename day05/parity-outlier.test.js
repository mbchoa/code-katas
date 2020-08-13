import findOutlier from "./parity-outlier";

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

test("case #1", () => {
  Test.assertEquals(findOutlier([0, 1, 2]), 1);
});
test("case #2", () => {
  Test.assertEquals(findOutlier([1, 2, 3]), 2);
});
test("case #3", () => {
  Test.assertEquals(findOutlier([2, 6, 8, 10, 3]), 3);
});
test("case #4", () => {
  Test.assertEquals(findOutlier([0, 0, 3, 0, 0]), 3);
});
test("case #5", () => {
  Test.assertEquals(findOutlier([1, 1, 0, 1, 1]), 0);
});
