/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root
  const stack = [root]

  while (stack.length) {

    let len = stack.length
    let p = stack.shift()
    p.left && stack.push(p.left)
    p.right && stack.push(p.right)

    for (let _ = 1; _ < len; _++) {
      p.next = stack.shift();
      p = p.next
      p.left && stack.push(p.left);
      p.right && stack.push(p.right);
    }

    p.next = null

  }
  return root
};
// @lc code=end

