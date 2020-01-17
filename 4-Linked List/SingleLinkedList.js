class SingleLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    let newNode = new SingleLinkedListNode(value);
    if (!this.head && !this.tail) {
      this.head = this.tail = newNode;
    } else {
      let current = this.head;
      while(current) {
        if (current.next) {
          current = current.next;
        } else {
          current.next = newNode;
          this.tail = newNode;
          break;
        }
      }
    }
  }

  print(node = this.head) {
    if (!node) {
      console.log(':)');
    } else {
      console.log(node.value);
      this.print(node.next);
    }
  }
}

export default SingleLinkedList;