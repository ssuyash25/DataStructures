class Node{
    constructor(value, preority){
        this.val = value
        this.preority = preority
    }
}

class PreorityQueue {
    constructor(){
         this.values = [];
    }

    // Add to the end and Bubble Up
    enQueue(value, preority){
        let node = new Node(value, preority)
        this.values.push(node)
        this.bubbleUp()
        return this.values;
    }

    bubbleUp(){
        let index = this.values.length -1;
        const element = this.values[index];
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element.preority >= parent.preority)
            break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    deQueue(){
        const max =  this.values[0];  
        const end = this.values.pop();
        if(this.values.length > 0){
        this.values[0] = end;          // Swap first with the last index
        this.sinkDown();
        }
        return max;
    }

    sinkDown(){
        let index = 0
        let length = this.length;
        let element = this.values[0]
        while(true){
            let leftChildIdx = (2*index) + 1
            let rightChildIdx = (2*index) + 2
            let leftChild,rightChild
            let swap = null

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild.preority < element.preority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.preority < element.preority) ||
                (swap !==null && rightChild.preority < leftChild.preority)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }
}

// Testing
const preorityQueue = new PreorityQueue()

preorityQueue.enQueue("common cold", 5)
preorityQueue.enQueue("fever", 4)
preorityQueue.enQueue("Infulenza", 3)
preorityQueue.enQueue("Skin Infection", 2)
console.log(preorityQueue.enQueue("Corona", 1))
console.log(preorityQueue.deQueue())
console.log(preorityQueue.deQueue())
console.log(preorityQueue.deQueue())
console.log(preorityQueue.deQueue())
console.log(preorityQueue.deQueue())