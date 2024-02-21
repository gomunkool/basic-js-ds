const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(data, parent) {
    this.arr = []
    this.data = data
    this.leftChild = null
    this.rightChild = null
    this.parent = parent
  }

  root() {
    if (this.data) {
      return this
    }
    return null
  }

  add(data) {
    this.arr.push(data)
    if (!this.data) {
      this.data = data
      return
    }
    if (this.data > data) {
      if (this.leftChild) {
        this.leftChild.add(data)
      } else {
        this.leftChild = new BinarySearchTree(data, this)
      }
      return
    }
    if (this.data < data) {
      if (this.rightChild) {
        this.rightChild.add(data)
      } else {
        this.rightChild = new BinarySearchTree(data, this)
      }
    }
  }

  has(data) {
    if (this.data === data) {
      return true
    }
    if (data > this.data) {
      if (this.rightChild) {
        return this.rightChild.has(data)
      } else {
        return false
      }
    }
    if (data < this.data) {
      if (this.leftChild) {
        return this.leftChild.has(data)
      } else {
        return false
      }
    }
  }

  find(data) {
    if (this.data === data) {
      return this
    }
    if (data > this.data) {
      if (this.rightChild) {
        return this.rightChild.find(data)
      } else {
        return null
      }
    }
    if (data < this.data) {
      if (this.leftChild) {
        return this.leftChild.find(data)
      } else {
        return null
      }
    }
  }

  remove(data) {
    this.data = null
    this.leftChild = null
    this.rightChild = null
    const arr = this.arr.filter((value) => value !== data)
    this.arr = []
    for (let element of arr) {
      this.add(element)
    }
  }

  min() {
    if (this.leftChild) {
      return this.leftChild.min()
    }
    return this.data
  }

  max() {
    if (this.rightChild) {
      return this.rightChild.max()
    }
    return this.data
  }
}

module.exports = {
  BinarySearchTree
};