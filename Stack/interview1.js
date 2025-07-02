// Stack: Push for a Stack That Uses an Array( ** Interview Question)
// In the Stack: Intro video we discussed how stacks are commonly implemented using an array instead of a Linked List.

// Write the push method to add an item onto a stack that is implemented with an array.



// The method should add the given value to the top of the stack, increasing the size of the stack by one.



//   Constraints:

// The stack should be implemented using an array.

//   You cannot use built-in methods to manipulate the stack, except for the push() method of the array.



// Class Definition:

// class Stack {
//   constructor() {
//     this.stackList = [];
//   }

//   // ... other methods ...

//   push(value) {
//     // Your implementation goes here
//   }
// }




// Example 1:

// Suppose you have a Stack object, stack, with the following values:
// [1, 2, 3]

// After calling the push() function:

//   stack.push(4);


// The stack should now have the following values: [1, 2, 3, 4]





// Example 2:

// Now suppose you have a Stack object, stack, with the following values:
// ['apple', 'banana', 'orange']

// After calling the push() function:

//   stack.push('grape');


// The stack should now have the following values: ['apple', 'banana', 'orange', 'grape']


class Stack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    for (let i = this.stackList.length - 1; i >= 0; i--) {
      console.log(this.stackList[i]);
    }
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

  size() {
    return this.stackList.length;
  }

  push(value) {
    return this.stackList.push(value)

  }

}


