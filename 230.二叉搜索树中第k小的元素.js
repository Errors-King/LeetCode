/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  //二叉搜索树的中序遍历就是升序的了，所以直接遍历一次然后拿res[k - 1]
  const stack = []
  let p = root
  const res = []

  while (p || stack.length) {

    while (p) {
      stack.push(p)
      p = p.left
    }

    let pop = stack.pop()
    res.push(pop.val)

    p = pop.right

  }

  return res[k - 1]
};
// @lc code=end

