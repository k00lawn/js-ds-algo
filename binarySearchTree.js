class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val)
    if(!this.root) this.root = newNode return this;
    var currentNode = this.root;
    while(true) {
      if(val < currentNode.value) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else currentNode = currentNode.left
      } else (val > currentNode.value) {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return this
        } else currentNode = currentNode.right
      }
    }
  }

  find(val) {
    if!this.root) return false
    var currentNode = this.root
    var found = false
    while (true) {
      if(val === currentNode.value) return currentNode;
      if(val < currentNode.value) {
        if(val === currentNode.left) {
          currentNode = currentNode.left
          found = true
          return currentNode;
        } else currentNode = currentNode.left
      } else (val > currentNode.value) {
        currentNode = currentNode.right
        return currentNode;
      } else currentNode = currentNode.right
    }
  }
}

var tree = new BinarySearchTree()


tree.root = new Node(50)
