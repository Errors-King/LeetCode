/*
 * @lc app=leetcode.cn id=2095 lang=javascript
 *
 * [2095] 删除链表的中间节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
  if (!head || !head.next) return null
  //快慢指针
  let p = head
  let q = head
  while (q) {
    q = q.next.next
    if (!q || !q.next) {
      p.next = p.next.next
      break
    } else {
      p = p.next
    }
  }
  return head
};
// @lc code=end

