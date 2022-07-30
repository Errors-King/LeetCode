/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) return true
  /**
   * {
   *    item => { du: 'xxx', nexts: ['xx','xx']},
   *    item => { du: 'xxx', nexts: ['xx','xx']}
   * }
   */
  const dependence = new Map()
  const queue = []
  let count = 0
  //建立映射
  prerequisites.forEach(item => {
    if (dependence.has(item[0])) {
      let cur = dependence.get(item[0])
      cur.du++
      cur.nexts.set(item[1], 1)
    } else {
      dependence.set(item[0], {
        du: 1,
        nexts: new Map()
      })
      dependence.get(item[0]).nexts.set(item[1], 1)
      count++
    }

    if (!dependence.has(item[1])) {
      dependence.set(item[1], {
        du: 0,
        nexts: new Map()
      })
      count++
    }
  })

  //首先获取度为0的
  for (let item of dependence) {
    if (item[1].du === 0) {
      queue.push(item[0])
      dependence.delete(item[0])
      count--
    }
  }
  // 删除依赖线
  while (queue.length) {
    const pop = queue.shift()
    for (let item of dependence) {
      if (item[1].nexts.has(pop)) {
        item[1].du--
        if (item[1].du === 0) {
          queue.push(item[0])
          dependence.delete(item[0])
          count--
        }
      }
    }
  }

  if (!count) return true
  return false
}
// @lc code=end

