/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (postorder.length === 0) return null

  let headVal = postorder[postorder.length - 1]
  let index = inorder.indexOf(headVal)

  const head = new TreeNode(headVal)

  let leftInorder = inorder.slice(0, index)
  let rightInorder = inorder.slice(index + 1)

  let leftPostorder = postorder.slice(0, leftInorder.length)
  let rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1)

  head.left = buildTree(leftInorder, leftPostorder)
  head.right = buildTree(rightInorder, rightPostorder)
  
  return head
};
// @lc code=end

