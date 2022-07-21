/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next || !head.next.next) return
  //持续反转链表，但是这个时间太长了 2000 左右
  /**
   * 
  let p = head
  while (p) {
    p.next = reserveList(p.next)
    p = p.next
  }
  */

//其他思路：
  //1 快慢指针切成两半
  //2 反转后半部分
  //3 合并两部分链表
  let slow = head
  let fast = head
  
  //找中点
  while (fast.next?.next) {
    slow = slow.next
    fast = fast.next?.next
  }
  //反转后半部分
  let right= reserveList(slow.next)
  //右边进行插入会丢失后继节点，所以需要提前保存起来
  let rightNext = right.next
  let left = head
  slow.next = null
  //合并两部分
  while (right) {
    right.next = left.next
    left.next = right
    right = rightNext
    rightNext = rightNext?.next
    left = left.next.next
  }
  return head
  //反转链表函数
  function reserveList(root) {
    if (!root || !root.next) {
      return root
    }
    let left = null
    let middle = root
    let right = root.next
    while (right) {
      middle.next = left
      left = middle
      middle = right
      right = right.next
    }
    middle.next = left
    return middle
  }
};
// @lc code=end

