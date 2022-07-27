/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  let count = 1
  const stack1 = [root]
  const stack2 = []
  const res = [[root.val]]

  while (stack1.length || stack2.length) {
    let flag = count % 2 //标志
    let stack = flag === 1 ? stack1 : stack2 //将有元素的栈拿到
    let otherStack = flag === 1 ? stack2 : stack1
    let middleRes = [] //存储中间值

    //单数行情况
    if (flag === 1) {
      while (stack.length) {
        let pop = stack.pop()
        if (pop.right) {
          otherStack.push(pop.right)
          middleRes.push(pop.right.val)
        }
        if (pop.left) {
          otherStack.push(pop.left)
          middleRes.push(pop.left.val)
        }
      }
    }

    //双数行情况
    if (flag !== 1) {
      while (stack.length) {
        let pop = stack.pop()
        if (pop.left) {
          otherStack.push(pop.left)
          middleRes.push(pop.left.val)
        }
        if (pop.right) {
          otherStack.push(pop.right)
          middleRes.push(pop.right.val)
        }
      }
    }

    //中间存储数据的数组有元素才push
    if (middleRes.length) {
      res.push(middleRes)
    }
    //给middleRes置空
    middleRes = []
    count++

  }



  return res
};
// @lc code=end

