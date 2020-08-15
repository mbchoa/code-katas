export class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export default function maxSum(root) {
  function maxSumRec(currSum, node) {
    if (!node.left && !node.right) {
      currSum += node.value;
      if (currSum > maxSum) maxSum = currSum;
      return;
    }

    if (node.left) maxSumRec(currSum + node.value, node.left);
    if (node.right) maxSumRec(currSum + node.value, node.right);
  }

  if (!root) return 0;
  let maxSum = 0;
  maxSumRec(0, root);
  return maxSum;
}

/**
 * @see [Better Solution](https://www.codewars.com/kata/reviews/57fc02a0d98d13e7b800004e/groups/5837e95d2fb0ba62f400003f)
 * function maxSum(root) {
 *   return !root ? 0 : root.value + Math.max(maxSum(root.left)), maxSum(root.right));
 * }
 */
