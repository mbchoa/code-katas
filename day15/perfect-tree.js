export default class TreeNode {
  constructor(left = null, right = null) {
    this.left = left;
    this.right = right;
  }

  static isPerfect(root) {
    function isPerfectRec(node, treeHeight, level = 0) {
      if (!node) {
        return true;
      }

      if (!node.left && !node.right) {
        return treeHeight === level + 1;
      }

      if (!node.left || !node.right) {
        return false;
      }

      return (
        isPerfectRec(node.left, treeHeight, level + 1) &&
        isPerfectRec(node.right, treeHeight, level + 1)
      );
    }

    return isPerfectRec(root, TreeNode.leftHeight(root));
  }

  static leaf() {
    return new TreeNode();
  }

  static join(left, right) {
    return new TreeNode().withChildren(left, right);
  }

  static leftHeight(node) {
    let d = 0;
    while (node !== null) {
      d++;
      node = node.left;
    }
    return d;
  }

  withLeft(left) {
    this.left = left;
    return this;
  }

  withRight(right) {
    this.right = right;
    return this;
  }

  withChildren(left, right) {
    this.left = left;
    this.right = right;
    return this;
  }

  withLeftLeaf() {
    return this.withLeft(TreeNode.leaf());
  }

  withRightLeaf() {
    return this.withRight(TreeNode.leaf());
  }

  withLeaves() {
    return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
  }
}
