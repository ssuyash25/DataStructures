class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
// Benifits over SLL - Deleting the last Item in the List is convinent as you do not need to 
// itterate the entire List.
// Printing the List in Reverse
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value)
        if (!this.head) this.head = node
        else this.tail.next = node
        node.prev = this.tail
        this.tail = node
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) return undefined
        let end = this.tail
        this.tail = end.prev
        this.tail.next = null
        end.prev = null
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = null;
        }
        return end;
    }

    shift() {
        if (this.length === 0) return undefined
        let node = this.head
        if (this.length === 1) this.head = this.tail = null
        else {
            this.head = node.next
            node.next = null
            this.head.prev = null
        }
        this.length--
        return node
    }

    unShift(value) {
        let node = new Node(value)
        if (this.length === 1) this.head = this.tail = node
        else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.length++
        return this
    }

    get(index) {
        if (this.length === 0 || index < 0 || index > this.length) return null
        let count
        let current
        if (index < this.length / 2) {
            count = 0
            current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while (count !== index) {
                current = current.prev
                count--
            }
        }
        return current
    }

    set(index, value) {
        let node = this.get(index)
        if (node) {
            node.val = value
            return true
        }
        else return false
    }

    insert(index, value) {
        let oldNode = this.get(index - 1)
        if (oldNode) {
            let node = new Node(value)
            node.prev = oldNode
            node.next = oldNode.next
            oldNode.next = node
            this.length++
            return this
        }
        else return false
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined
        else if (index === 0) return this.shift()
        else if (index === this.length) return this.pop()
        else {
            let removedNode = this.get(index)
            removedNode.next.prev = removedNode.prev
            removedNode.prev.next = removedNode.next
            removedNode.prev = removedNode.next = null
            this.length--
            return removedNode
        }
    }
    
    reverse() {
        let currentNode = this.tail;
        while (currentNode !== null) {
            let temp = currentNode.next
            currentNode.next = currentNode.prev;
            currentNode.prev = temp;
            currentNode = currentNode.next;
        }
        let temp = this.head
        this.head = this.tail;
        this.tail = temp;
        return this;
    }
}

let list = new DoublyLinkedList()