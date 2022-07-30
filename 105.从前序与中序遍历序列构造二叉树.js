/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  
  if (preorder.length === 0) return null

  let index = inorder.indexOf(preorder[0])
  
  const head = new TreeNode(preorder[0])

  let leftInorder = inorder.slice(0, index)
  let rightInorder = inorder.slice(index + 1)

  let leftPreorder = preorder.slice(1, leftInorder.length + 1)
  let rightPreorder = preorder.slice(leftInorder.length + 1)

  head.left = buildTree(leftPreorder, leftInorder)
  head.right = buildTree(rightPreorder, rightInorder)

  return head

};
// @lc code=end

