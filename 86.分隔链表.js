/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head || !head.next) return head
  const leftHead = new ListNode(null)
  const rightHead = new ListNode(null)
  let p = head, left = leftHead, leftPre, right = rightHead, rightPre
  //分组数据
  while (p) {
    if (p.val >= x) {
      right.val = p.val
      right.next = new ListNode(null)
      rightPre = right
      right = right.next
    } else {
      left.val = p.val
      left.next = new ListNode(null)
      leftPre = left
      left = left.next
    }
    p = p.next
  }
  //连接分组
  if (rightPre) {
    rightPre.next = null
    if (leftPre) {
      leftPre.next = rightHead
      return leftHead
    } else {
      return rightHead
    }
  } else {
    leftPre.next = null
    return leftHead
  }

};
// @lc code=end

