/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false
    //快慢指针解决思路
    let slow = head
    let fast = head.next
    while(slow && fast) {
      if (slow === fast) return true
      slow = slow.next
      //fast未必能走两步，所以需要进行判断，可以利用 ?.
      fast = fast.next?.next
    }
    return false

    //还可以利用标记方法，走过的地方进行标记
};
// @lc code=end

