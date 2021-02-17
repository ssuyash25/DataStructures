class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }
        this.size++;
        return this;
    }

    pop() {
        if (!this.first) return undefined;
        if (this.first === this.last) {
            this.last = null;
        }
        let node = this.first;
        this.first = node.next;
        node.next = null;
        this.size--;
        return node;
    }
}

let stack = new Stack()