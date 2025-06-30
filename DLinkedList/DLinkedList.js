class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DlinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (!this.head) return undefined;
    if (index < 0 || index >= this.length) return undefined;
    if (index < this.length / 2) {
      let temp = this.head;
      let countIndex = 0;
      while (temp.next) {
        if (index == countIndex) break;
        else {
          temp = temp.next;
          countIndex++;
        }
      }
      return temp;
    } else {
      let temp = this.tail;
      let countIndex = this.length - 1;
      while (temp.prev) {
        if (index == countIndex) break;
        else {
          temp = temp.prev;
          countIndex--;
        }
      }
      return temp;
    }
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    else if (index == 0) this.unshift(value);
    else if (index == this.length) this.push(value);
    else {
      const newNode = new Node(value);
      let temp = this.get(index - 1);
      newNode.prev = temp;
      newNode.next = temp.next;
      temp.next.prev = newNode;
      temp.next = newNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index == 0) return this.shift();
    else if (index == this.length - 1) return this.pop();
    else if (index < 0 || index >= this.length) return false;
    else {
      let targetNode = this.get(index);
      let before = targetNode.prev;
      let after = targetNode.next;
      before.next = after;
      after.prev = before;
      targetNode.prev = null;
      targetNode.next = null;
      this.length--;
      return targetNode;
    }
  }
}

const myDLinkedList = new DlinkedList(2);
console.log(myDLinkedList);
