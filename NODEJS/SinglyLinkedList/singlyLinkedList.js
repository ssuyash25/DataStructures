class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head) this.head = newNode
        else this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    pop(){
        if(this.length === 0 ) return undefined
        let current = this.head;
        while(current && current.next != this.tail){
            current = current.next
        }
        const value = current.next.val
        current.next = null
        this.tail = current
        this.length--;
        if(this.length === 0 ){
            this.head= this.tail = null;
        }
        return value;
    }

    shift(){
        if(length === 0) return undefined
        const val = this.head.val;
        this.head = this.head.next;
        this.length--;
        if(length === 0) this.tail = null
        return val;
    }

    unshift(val){
        const newNode = new Node(val)
        if(this.length === 0) this.head = this.tail = newNode
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++;
        return true;
    }

    get(index){
        if(index >= this.length) return false;
        let current = this.head
        while(current){
            if(index === 0) return current;
            index--;
            current = current.next;
        }
    }

    set(index, value){
        let foundNode = get(index)
        if(foundNode) foundNode.val = value
        return foundNode
    }

    insert(index, value){
        if(index < 0 || index >= this.length) return false;
        if(index === length-1) return this.push(value);
        if(index === 0) return this.unshift(value)
        const newNode = new Node(value)
        let previous = this.get(index-1)
        const temp = previous.next
        previous.next = newNode
        newNode.next = temp 
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === this.length -1 ) return this.pop()
        if(index === 0) return this.shift()
        let foundNode = get(index-1)
        foundNode.next = foundNode.next.next
        this.length--;
    }

    reverse(){
       let current = this.head
       this.head = this.tail
       this.tail = current
       let next;
       let prev = null;
      for(let i=0; i< this.length; i++){
          next = current.next
          current.next = prev
          prev = current
          current = next
      }
    return this
    }

    // Rotate Linked List 'n' Times
    rotate(n){
        console.log(this)
        let i = Math.abs(n);
        let current = this.head
        while(i !== 0){
            current = this.head
            this.head = current.next
            current.next = null
            this.tail.next = current
            this.tail = current
            i--;
        }
    console.log(this)
    }
}

let list = new SinglyLinkedList()

list.push(5)
list.push(10)
list.push(20)
list.push(25)

list.rotate(-1)