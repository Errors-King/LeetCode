/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序搜索树
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let newRoot = new TreeNode()
  let newP = newRoot
  function inorder(root) {
    const stack = []
    let p = root
    while (p || stack.length) {
      if (p) {
        stack.push(p)
        p = p.left
        continue
      }
      const pop = stack.pop()

      console.log(pop.val)
      newP.val = pop.val

      p = pop.right

      if (p || stack.length) {
        newP.right = new TreeNode(null)
        newP = newP.right
      }
      
    }
  }
  inorder(root)
  return newRoot
};
// @lc code=end

