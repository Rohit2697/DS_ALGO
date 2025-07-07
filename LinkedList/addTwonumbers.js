/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */


class Node {
  constructor(val = 0) {
    this.val = val
    this.next = null
  }
}
class ListNode {
  constructor(val) {
    const newNode = new Node(val)
    this.head = newNode
    this.tail = this.head
  }
  add(val) {
    this.tail.next = {
      val,
      next: null
    }
    this.tail = this.tail.next
  }
  get() {
    return this.head.next
  }
}

var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode()

  let total = 0, carry = 0

  while (l1 || l2 || carry) {
    total = carry
    if (l1) {
      total += l1.val
      l1 = l1.next

    } if (l2) {
      total += l2.val
      l2 = l2.next
    }


    carry = Math.floor(total / 10)
    dummy.add(total % 10)

  }
  return dummy.get()

};



const l1arr = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
const l2arr = [5, 6, 4]
const l1 = new ListNode(l1arr[0])
const l2 = new ListNode(l2arr[0])

for (let i = 1; i < l1arr.length; i++) {
  l1.add(l1arr[i])
}
for (let i = 1; i < l2arr.length; i++) {
  l2.add(l2arr[i])
}

console.log(JSON.stringify(addTwoNumbers(l1.get(), l2.get())))
//console.log(reverseNumber(243)) 
