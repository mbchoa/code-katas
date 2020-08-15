import sumTheTreeValues from './tree-sum';

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
  describe,
  it,
};

Test.describe('Simple Test', function () {
  var simpleNode = {
    value: 10,
    left: { value: 1, left: null, right: null },
    right: { value: 2, left: null, right: null },
  };
  Test.it('Sums up all children', function () {
    Test.assertEquals(sumTheTreeValues(simpleNode), 13);
  });

  var unbalancedNode = {
    value: 11,
    left: { value: 0, left: null, right: null },
    right: {
      value: 0,
      left: null,
      right: { value: 1, left: null, right: null },
    },
  };
  Test.it('Handles unbalanced trees', function () {
    Test.assertEquals(sumTheTreeValues(unbalancedNode), 12);
  });
});
