/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  
  if (!head) return null
  if (!head.next) return new TreeNode(head.val)

  const newHead = new TreeNode(null)

  //找中间节点
  let fast = head
  let slow = head
  let pre = null
  while (fast.next && fast.next.next) {
    fast = fast.next.next
    pre = slow
    slow = slow.next
  }
  let middleNode = slow
  newHead.val = middleNode.val

  pre && (pre.next = null)

  // 递归
  let leftHead = sortedListToBST(!pre ? null : head)
  let rightHead = sortedListToBST(middleNode.next)
  newHead.left = leftHead
  newHead.right = rightHead

  return newHead
};
// @lc code=end

