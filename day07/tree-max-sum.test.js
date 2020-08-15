import maxSum, { TreeNode } from './tree-max-sum';

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

describe('maxSum', function () {
  /**
   * null
   */
  it('null tree', function () {
    var root = null;
    Test.assertEquals(maxSum(root), 0);
  });

  /**
   *      5
   *    /   \
   *  -22    11
   *  / \    / \
   * 9  50  9   2
   */
  it('perfect tree', function () {
    var root = new TreeNode(
      5,
      new TreeNode(-22, new TreeNode(9), new TreeNode(50)),
      new TreeNode(11, new TreeNode(9), new TreeNode(2))
    );
    Test.assertEquals(maxSum(root), 33);
  });
});
