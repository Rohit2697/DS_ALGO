/**
 * LL: Merge Two Sorted Lists ( ** Interview Question)
Description

The merge method takes in another LinkedList as an input and merges it with the current LinkedList.

The elements in both lists are assumed to be in ascending order, but the input lists themselves do not need to be sorted.



Parameters

otherList: the other LinkedList to merge with the current list



Return Value

This method does not return a value, but it modifies the current LinkedList to contain the merged list.



Example:



// Create the first linked list with elements 1 -> 3 -> 5 -> 7
const l1 = new LinkedList(1);
l1.push(3);
l1.push(5);
l1.push(7);
 
// Create the second linked list with elements 2 -> 4 -> 6 -> 8
const l2 = new LinkedList(2);
l2.push(4);
l2.push(6);
l2.push(8);
 
// Merge the second list into the first one
l1.merge(l2);
 
// Now, l1 should contain the merged list 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8


Details

The merge method works by first obtaining the head node of the 'otherList' and storing it in a local variable named otherHead.

A new dummy node is created, initialized with a value of 0. This dummy node serves as the temporary head of the merged list.

A variable called current is set to the dummy node. This variable is used to traverse and construct the merged list.

The method iterates through both the current list (this.head) and the other list (otherHead). It appends the node with the smaller value to the merged list and moves the head of that list to its next node.

The current variable is updated to point to the last node in the merged list.

If either of the original lists still has remaining nodes, these are appended to the end of the merged list.

The head of the current list is updated to point to the node next to the dummy node, effectively removing the dummy node from the list.

The length of the current list (this.length) is updated to include the length of the merged list.



Notes

This method assumes that both the current list and the other list are sorted in ascending order. If this is not the case, the merged list may not be sorted.

The merge method modifies the current list to include elements from both lists. If you wish to keep the original lists intact, you should create a new list and copy elements into it.

This JavaScript implementation doesn't have getHead, getTail, or getLength methods, unlike some other implementations. The head, tail, and length are directly accessed as properties of the LinkedList instance (this.head, this.tail, this.length).



 */


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
    this.tail = this.head;
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

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  merge(list2) {
    let l2 = list2.head
    let combinedList = new Node(0)
    let cl = combinedList
    let l1 = this.head
    while (l1 && l2) {
      if (l1.value < l2.value) {
        const temp = l1
        cl.next = temp
        l1 = l1.next
        temp.next = null

      }
      else {
        const temp = l2
        cl.next = temp
        l2 = l2.next
        temp.next = null
      }

      cl = cl.next

    }
    if (l1) cl.next = l1
    if (l2) cl.next = l2

    this.head = combinedList.next
  }

  //   +===================================================+
  //   |               WRITE YOUR CODE HERE                |
  //   | Description:                                      |
  //   | - This method merges another linked list          |
  //   |   (`otherList`) into the current list.            |
  //   |                                                   |
  //   | Side Effects:                                     |
  //   | - The merged list replaces the current list.      |
  //   | - The length of the list is updated.              |
  //   |                                                   |
  //   | Tips:                                             |
  //   | - A dummy node is used to simplify the            |
  //   |   merging process.                                |
  //   | - We traverse both lists, comparing each node.    |
  //   | - The smaller node is added to the new list.      |
  //   | - Finally, the remaining nodes are added.         |
  //   +===================================================+

}





// ------------------------------------
//  Merge two sorted lists
// ------------------------------------
const list1 = new LinkedList(1);
list1.push(3);
list1.push(5);
const list2 = new LinkedList(2);
list2.push(4);
list2.push(6);
console.log("Merge two sorted lists:");
list1.printList(); // Should print: 1 -> 3 -> 5
list2.printList(); // Should print: 2 -> 4 -> 6
list1.merge(list2);
list1.printList(); // Should print: 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log("---------------");

// ------------------------------------
//  Merge lists with duplicates
// ------------------------------------
const list5 = new LinkedList(1);
list5.push(2);
list5.push(3);
const list6 = new LinkedList(1);
list6.push(2);
list6.push(3);
console.log("Merge lists with duplicates:");
list5.printList(); // Should print: 1 -> 2 -> 3
list6.printList(); // Should print: 1 -> 2 -> 3
list5.merge(list6);
list5.printList(); // Should print: 1 -> 1 -> 2 -> 2 -> 3 -> 3
console.log("---------------");

// ------------------------------------
//  Merge lists with negative numbers
// ------------------------------------
const list7 = new LinkedList(-1);
list7.push(0);
const list8 = new LinkedList(-2);
list8.push(-1);
console.log("Merge lists with negative numbers:");
list7.printList(); // Should print: -1 -> 0
list8.printList(); // Should print: -2 -> -1
list7.merge(list8);
list7.printList(); // Should print: -2 -> -1 -> -1 -> 0
console.log("---------------");

// ------------------------------------
//  Merge lists where one is larger
// ------------------------------------
const list9 = new LinkedList(1);
list9.push(2);
const list10 = new LinkedList(3);
list10.push(4);
list10.push(5);
console.log("Merge lists where one is larger:");
list9.printList(); // Should print: 1 -> 2
list10.printList(); // Should print: 3 -> 4 -> 5
list9.merge(list10);
list9.printList(); // Should print: 1 -> 2 -> 3 -> 4 -> 5
console.log("---------------");


