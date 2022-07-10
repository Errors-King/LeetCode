import { RootProps } from '../interface'
import { binaryTree } from '../var'
//递归版本
function inorder1 (root: RootProps) {
  if (!root) return
  inorder1(root.left)
  console.log(root.val)
  inorder1(root.right)
}

inorder1(binaryTree)

//非递归版本
function inorder2 (root: RootProps) {
  if (!root) return
  const stack: RootProps[] = []
  let p: RootProps = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const cur: RootProps = stack.pop()
    console.log(cur?.val)
    p = cur?.right
  }
}

inorder2(binaryTree)
