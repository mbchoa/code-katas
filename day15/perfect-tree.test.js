import TreeNode from './perfect-tree';

describe('TreeNodeTest', function () {
  /**
   * null
   */
  it('null tree', function () {
    var root = null;
    expect(TreeNode.isPerfect(root)).toBe(true);
  });

  /**
   *   0
   *  / \
   * 0   0
   */
  it('full one level tree', function () {
    var root = TreeNode.leaf().withLeaves();
    expect(TreeNode.isPerfect(root)).toBe(true);
  });

  /**
   *   0
   *  /
   * 0
   */
  it('one child tree', function () {
    var root = TreeNode.leaf().withLeftLeaf();
    expect(TreeNode.isPerfect(root)).toBe(false);
  });
});
