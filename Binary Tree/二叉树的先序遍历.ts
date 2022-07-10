import { binaryTree } from '../var'
import { RootProps } from '../interface'

//递归版
function preTraversal1(root: RootProps) {
  if (!root) return
  console.log(root.val)
  preTraversal1(root.left)
  preTraversal1(root.right)
}

preTraversal1(binaryTree)

//非递归版
function preTraversal2 (root: RootProps) {
  if (!root) return
  const stack: RootProps[] = []
  stack.push(root)
  while (stack.length) {
    const pop = stack.pop()
    console.log(pop?.val)
    if (pop?.right) stack.push(pop.right)
    if (pop?.left) stack.push(pop.left)
  } 
}

preTraversal2(binaryTree)


