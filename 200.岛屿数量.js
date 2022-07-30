/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const visited = new Map()
  const queue = []
  const ROW = grid.length
  const COLUMN = grid[0].length
  const DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  let count = 0

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COLUMN; j++) {

      if (grid[i][j] === '1' && !isVisited(i, j)) {
        count++
        visited.set(i * COLUMN + j, 1)
        queue.push([i, j])

        while (queue.length) {
          const pop = queue.pop()
          for (let direction of DIRECTIONS) {
            let point = [pop[0] + direction[0], pop[1] + direction[1]];

            if (isBrand(...point) && !isVisited(...point) && grid[point[0]][point[1]] === '1') {
              visited.set(point[0] * COLUMN + point[1], 1)
              queue.push(point)
            }

          }
        }

      } else {
        continue
      }

    }
  }

  //是否访问过
  function isVisited(i, j) {
    if (visited.has(i * COLUMN + j)) {
      return true
    } else {
      return false
    }
  }

  // 是否越界
  function isBrand(i, j) {
    if (i < 0 || i >= ROW || j < 0 || j >= COLUMN) {
      return false
    } else {
      return true
    }
  }

  return count

};
// @lc code=end

