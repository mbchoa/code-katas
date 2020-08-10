import solution from "./multiples-3-and-5";

const Test = {
  describe,
  assertEquals(a, b) {
    expect(a).toBe(b);
  },
};

Test.describe("basic tests", function () {
  test("passes basic tests", () => {
    Test.assertEquals(solution(10), 23);
  });
});
