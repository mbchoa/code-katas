import cache from "./memoize";

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

describe("base cases", () => {
  const addNumbers = (a, b) => a + b;
  const cachedFunction = cache(addNumbers);

  test("case #1", () => {
    Test.assertEquals(cachedFunction(3, 4), 7);
  });

  test("case #2", () => {
    Test.assertEquals(cachedFunction(3, 4), 7);
  });
});
