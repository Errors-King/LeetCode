/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return
  flattenTree(root)

  function flattenTree(root) {
    if (!root) return null
    if (!root.left && !root.right) return root

    let leftLast = flattenTree(root.left)
    let rightLast = flattenTree(root.right)

    //指针指向调整
    if (root.left) {
      leftLast.right = root.right
      root.right = root.left
      root.left = null
    }

    //返回尾节点
    let p = root
    while (p.right) {
      p = p.right
    }
    return p
  }

};
// @lc code=end

