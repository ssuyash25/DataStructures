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


class Stack{
    constructor(){
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    push(n){
        this.q1.enqueue(n)
        return this.q1
    }

    pop(){
        if(this.q1.size === 0)
        return undefined
        let latest
        for(let i =0; i<= this.q1.size + 1; i++){
            const t = this.q1.dequeue()
            console.log(t)
            this.q2.enqueue(t)
        }
        latest = this.q1.dequeue()
        console.log(this.q1)
        //console.log(this.q2)
        this.q1 = this.q2
        return latest
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
//console.log(stack.push(1))

console.log(stack.pop())