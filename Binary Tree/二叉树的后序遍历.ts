import { binaryTree } from '../var'
import { RootProps } from '../interface'
//递归版
function postorder1(root: RootProps) {
  if (!root) return 
  postorder1(root.left)
  postorder1(root.right)
  console.log(root.val)
}

postorder1(binaryTree)


//非递归版
function postorder2(root: RootProps) {
  //类似先序的倒序,所以可以先把数据存起来，然后再pop出来
  const stack = [root]
  const val: number[] = []
  while (stack.length) {
    const pop = stack.pop()
    val.push(pop?.val as number)
    if (pop?.left) stack.push(pop.left)
    if (pop?.right) stack.push(pop.right)
  }
  while(val.length) {
    console.log(val.pop())
  }
}

postorder2(binaryTree)

