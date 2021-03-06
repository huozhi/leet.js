const BinaryTree = require('../utils/binary-tree')
const maxDepth = require('../src/maximum-depth-of-binary-tree')

describe('maximum depth of binary tree', () => {
  it('1', () => {
    const array = [3, 1, 5, 2, 4]
    const tree = new BinaryTree()
    tree.fromArray(array)
    expect(maxDepth(tree.root)).toBe(3)
  })
})
