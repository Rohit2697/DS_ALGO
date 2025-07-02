/**
 * Queue Using Stacks: Dequeue ( ** Interview Question)
Implement a method called dequeue() for a MyQueue class that removes and returns the element from the front of the queue. The MyQueue class should use two Stack objects to store and manipulate the elements.

The function should remove the front element from the queue and return its value. If the queue is empty, the function should return null.



Constraints:

The MyQueue class should be implemented using two Stack objects provided in the Stack class.

You cannot use any other data structures or built-in queue manipulation methods for this task.



Class Definition:

class MyQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
 
    // ... other methods ...
 
    dequeue() {
        // Your implementation goes here
    }
}




Example 1:

Suppose you have a MyQueue object, queue, with the following values:
[1, 2, 3, 4]

After calling the dequeue() function:

let dequeuedValue = queue.dequeue();

The queue should now have the following values:
[2, 3, 4], and the dequeuedValue should be 1.





Example 2:

Now suppose you have a MyQueue object, queue, with the following values: ['apple', 'banana', 'orange', 'grape']

After calling the dequeue() function:

let dequeuedValue = queue.dequeue();

The queue should now have the following values:
['banana', 'orange', 'grape'], and the dequeuedValue should be 'apple'.
 */

class Stack {
  constructor() {
    this.stackList = [];
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }

}



class MyQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  peek() {
    return this.stack1.peek();
  }

  isEmpty() {
    return this.stack1.isEmpty();
  }

  enqueue(value) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {

    if(this.stack1.isEmpty())return null
    return this.stack1.pop()
  }

}



const queue = new MyQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Initial queue state:");
console.log("Peek: ", queue.peek());
console.log("Is the queue empty? ", queue.isEmpty());

console.log("Dequeueing the first element: ", queue.dequeue());
console.log("Peek after dequeueing: ", queue.peek());

console.log("Dequeueing the second element: ", queue.dequeue());
console.log("Peek after dequeueing: ", queue.peek());

console.log("Dequeueing the third element: ", queue.dequeue());
console.log("Is the queue empty? ", queue.isEmpty());

console.log("Dequeueing from empty queue: ", queue.dequeue());



/*
  EXPECTED OUTPUT:
  ----------------
  Initial queue state:
  Peek:  1
  Is the queue empty?  false
  Dequeueing the first element:  1
  Peek after dequeueing:  2
  Dequeueing the second element:  2
  Peek after dequeueing:  3
  Dequeueing the third element:  3
  Is the queue empty?  true
  Dequeueing from empty queue:  null

*/