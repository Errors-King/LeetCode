import { binaryTree } from "../var";
import { RootProps } from '../interface'

function bfs(root: RootProps) {

  let height = 0
  if (!root) return
  const queue: RootProps[] = [root]
  let levelSize = 1
  while (queue.length) {
    const e: RootProps = queue.shift()
    console.log(e?.val)
    if (e?.left) queue.push(e.left)
    if (e?.right) queue.push(e.right)
    levelSize--
    if (!levelSize) {
      levelSize = queue.length
      height++
    }
  }
  
  return height

}

console.log('height', bfs(binaryTree))
