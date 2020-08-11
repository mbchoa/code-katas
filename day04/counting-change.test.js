import countChange from "./counting-change";

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

test("simple case", () => {
  Test.assertEquals(countChange(4, [1, 2]), 3);
});

test("another simple case", () => {
  Test.assertEquals(countChange(10, [5, 2, 3]), 4);
});

test("no change", () => {
  Test.assertEquals(countChange(11, [5, 7]), 0);
});
