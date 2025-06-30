class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
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
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  reverseBetween(m, n) {
    if (!this.head) return;
    if(m===2) return 
    let targetM = null;
    let targetN = null;
    let dum1 = new Node(0);
    let prev1 = dum1;
    let dum2 = new Node(0);
    let prev2 = dum2;
    let dumMiddle = new Node(0);
    let prevM = dumMiddle;
    let current = this.head;
    let index = 0;
    while (current) {
      console.log(current.value);
      if (index == m) {
        targetM = new Node(current.value);
      } else if (index == n) {
        targetN = new Node(current.value);
      } else if (index < m) {
        prev1.next = new Node(current.value);
        prev1 = prev1.next;
      } else if (index > m && index < n) {
        prevM.next = new Node(current.value);
        prevM = prevM.next;
      } else {
        prev2.next = new Node(current.value);
        prev2 = prev2.next;
      }
      index++;
      current = current.next;
    }

    targetM.next = dum2.next;
    prevM.next = targetM;
    targetN.next = dumMiddle.next;
    prev1.next = targetN;
    this.head = dum1.next;
  }

  // WRITE THE REVERSEBETWEEN METHOD HERE //
  //                                      //
  //                                      //
  //                                      //
  //                                      //
  //////////////////////////////////////////
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/
