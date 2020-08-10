import digital_root from "./digital-root";

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

test("it should passes basic tests", () => {
  Test.assertEquals(digital_root(16), 7);
  Test.assertEquals(digital_root(456), 6);
});
