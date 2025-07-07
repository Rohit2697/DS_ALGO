class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class rBST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    }
    else {
      let current = this.root
      return this.#rInsert(newNode, current)
    }
  }

  #rInsert(node, current) {
    if (!current) return node
    if (current.value > node.value) {
      current.left = this.#rInsert(node, current.left)
    }
    else {
      current.right = this.#rInsert(node, current.right)
    }
    return current

  }

  contains(value) {
    if (!this.root) return undefined
    let current = this.root
    return this.#rContains(value, current)
  }
  minValue(current) {

    while (current.left !== null) {
      current = current.left
    }
    return current.value
  }
  #rContains(value, current) {
    if (!current) return false
    if (value == current.value) return true

    if (value > current.value) return this.#rContains(value, current.right)
    else return this.#rContains(value, current.left)
  }

  delete(value) {
    this.root = this.#rDelete(value, this.root)
  }
  #rDelete(value, current) {
    if (!current) return null
    if (value < current.value) {
      current.left = this.#rDelete(value, current.left)
    } else if (value > current.value) {
      current.right = this.#rDelete(value, current.right)
    }
    else {
      if (current.left == null && current.right == null) {
        return null
      }
      else if (current.left == null) {
        current = current.right
      }
      else if (current.right == null) {
        current = current.left
      }
      else {
        const subTreeMin = this.minValue(current.right)
        current.value = subTreeMin
        current.right = this.#rDelete(subTreeMin, current.right)
      }
    }
    return current
  }
}


let myBST = new rBST();

myBST.insert(2);
myBST.insert(1);
myBST.insert(3);
myBST.insert(5);


/*
  THE LINES ABOVE CREATE THIS TREE:
               2
              / \
             1   3
*/


console.log("Root:", myBST.root.value);
console.log("\nRoot->Left:", myBST.root.left.value);
console.log("\nRoot->Right:", myBST.root.right.value);

console.log(JSON.stringify(myBST))

console.log("vaue 6: ", myBST.contains(6))
console.log("vaue 1: ", myBST.contains(1))
/*
  EXPECTED OUTPUT:
  ----------------
  Root: 2

  Root->Left: 1

  Root->Right: 3

*/