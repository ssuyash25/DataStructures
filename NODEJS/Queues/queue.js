class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return undefined;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        let temp = this.first
        this.first = this.first.next
        temp.next = null;
        this.size--;
        return temp;
    }

}

let queue = new Queue();