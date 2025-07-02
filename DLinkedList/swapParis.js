class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.prev = currentNode;
    }
    this.length++;
  }

//   Pseudo Code:

//     As you work through the pseudo-code, I recommend sketching the nodes, pointers, and each step on paper.This visual representation will greatly aid in understanding and tracking the process.
  
  
//   1. Create a dummy node with value 0

// 2. Set the next of the dummy node to the head of the list

// 3. Initialize prev pointer to the dummy node

// 4. Loop while head of the list is not null and the next node of the head is not null

// a.Set firstNode pointer to the head of the list

// b.Set secondNode pointer to the next node of the head of the list

// c.Set the next of prev pointer to secondNode pointer

// d.Set the next of firstNode pointer to the next of secondNode pointer

// e.Set the next of secondNode pointer to firstNode pointer

// f.Set the previous of secondNode pointer to prev pointer

// g.Set the previous of firstNode pointer to secondNode pointer

// h.If the next node of firstNode pointer is not null, set its previous to firstNode pointer

// i.Move the head of the list to the next node of firstNode pointer

// j.Update prev pointer to firstNode pointer

// 5. Set the head of the list to the next of the dummy node

// 6. If the head of the list is not null, set its previous to null












  swapPairs() {
    if (!this.head) return undefined
    const dummyNode = new Node(0)
    let fast = this.head
    while (fast) {

      if (fast.prev) {
        const prevNode = fast.prev
        prevNode.next = fast.next
        fast.next.prev = prevNode
        fast.next = prevNode
        fast.prev = prevNode.prev
        prevNode.prev = fast
        fast = prevNode.next.next

      } else {
        fast = fast.next
      }
    }
  }
}



let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log("Original List 1:");
myDoublyLinkedList.printList();

myDoublyLinkedList.swapPairs();
console.log("\nList 1 after swapping pairs:");
myDoublyLinkedList.printList();

let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log("\nOriginal List 2:");
myDoublyLinkedList2.printList();

myDoublyLinkedList2.swapPairs();
console.log("\nList 2 after swapping pairs:");
myDoublyLinkedList2.printList();

/*
  EXPECTED OUTPUT:
  ----------------
  Original List 1:
  1
  2
  3
  4
  5

  List 1 after swapping pairs:
  2
  1
  4
  3
  5

  Original List 2:
  1
  2
  3
  4
  5
  6

  List 2 after swapping pairs:
  2
  1
  4
  3
  6
  5
*/
