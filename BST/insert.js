class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let temp = this.root
    while (true) {
      if (temp.value == value) return undefined
      if (value > temp.value) {
        if (!temp.right) {
          temp.right = newNode
          return this
        } temp = temp.right
      } else {
        if (!temp.left) {
          temp.left = newNode
          return this
        }
        temp = temp.left
      }
    }
  }

}



let myBST = new BST();

myBST.insert(2);
myBST.insert(1);
myBST.insert(3);

/*
  THE LINES ABOVE CREATE THIS TREE:
               2
              / \
             1   3
*/


console.log("Root:", myBST.root.value);
console.log("\nRoot->Left:", myBST.root.left.value);
console.log("\nRoot->Right:", myBST.root.right.value);


/*
  EXPECTED OUTPUT:
  ----------------
  Root: 2

  Root->Left: 1

  Root->Right: 3

*/

