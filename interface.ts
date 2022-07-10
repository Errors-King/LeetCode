export interface BinaryTreeProps<T> {
  val: T,
  left?: BinaryTreeProps<T> | null,
  right?: BinaryTreeProps<T> | null
}

export type RootProps = BinaryTreeProps<number> | null | undefined