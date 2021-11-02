class NodeLinkedList {
  value: any;
  next: any;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: any;
  tail: any;
  length: number = 0;

  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  push(value: any) {
    const node = new NodeLinkedList(value);
    this.length++;

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  delete(index: number) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      } else {
        this.head = null;
      }

      this.length--;
      return head.value;
    }

    const node = this._find(index - 1);
    const excise = node.next;

    if (!excise) return null;
    node.next = excise.next;
    if (!node.next) this.tail = node.next;

    this.length--;

    return excise.value;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  _find(index: number) {
    if (index >= this.length) return null;
    let current = this.head;

    for (let i = 0; i <= index - 1; i--) {
      current = current.next;
    }

    return current;
  }

  get(index: number) {
    const node = this._find(index);
    if (!node) return 0;
    return node.value;
  }
}
