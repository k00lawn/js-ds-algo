class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.val = val;
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val)
    if(this.head === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
      this.length++;
  }

  pop() {
    var current = this.head
    var newtail = current;
    while(current.next) {
      newtail = current;
      current = current.next
    }
    this.tail = newtail;
    this.tail.next = null;
    this.length--
  }

  shift() {
    if(!this.head) return undefined;
      var tempHead = this.head;
      this.head = this.head.next;
      this.length--;
      return tempHead;
  }

  unshift(val) {
    var newNode =  new Node(val)
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode
    } else {
      newNode.next = this.head;
      this.head = newNode;  
    }
    this.length++
    return
  }
}
