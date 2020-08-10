import validParentheses from "./valid-parens";

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

test("it should pass basic tests", () => {
  Test.assertEquals(validParentheses("()"), true);
  Test.assertEquals(validParentheses("())"), false);

  Test.assertEquals(validParentheses(")(()))"), false);
  Test.assertEquals(validParentheses("("), false);
  Test.assertEquals(validParentheses("(())((()())())"), true);
});
