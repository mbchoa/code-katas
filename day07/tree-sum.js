export default function treeSum(root) {
  return !root ? 0 : root.value + treeSum(root.left) + treeSum(root.right);
}
