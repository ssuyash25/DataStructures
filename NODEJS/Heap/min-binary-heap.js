class MinBinaryHeap {
    constructor(){
         this.values = [];
    }

    // Add to the end and Bubble Up
    insert(value){
        this.values.push(value)
        this.bubbleUp()
        return this.values;
    }

    bubbleUp(){
        let index = this.values.length -1
        let parentIndex = Math.floor((index-1)/2)
        while(this.values[parentIndex] > this.values[index]){
            // console.log('Swapping values', this.values[parentIndex], '    ', this.values[index] )
            const swap = this.values[parentIndex]
            this.values[parentIndex] = this.values[index]
            this.values[index] = swap
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }

    extractMin(){
        const max =  this.values[0];  
        const end = this.values.pop();
        if(this.values.length > 0){
        this.values[0] = end;          // Swap first with the last index
        this.sinkDown(end);
        }
        return max;
    }

    sinkDown(element){
        let index = 0
        while(true){
            let parentIndex
            let leftChild = (2*index) + 1
            let rightChild = (2*index) + 2
            if(this.values[leftChild] < element && this.values[rightChild] < element) // swap with the largest
            parentIndex = this.values[leftChild] < this.values[rightChild] ? leftChild : rightChild
            else if(this.values[leftChild] < element )
            parentIndex = leftChild
            else if( this.values[rightChild] < element)
            parentIndex = rightChild
            else
            break;
            // console.log('Swapping values', this.values[parentIndex], '    ', element )
            this.values[index] = this.values[parentIndex]
            this.values[parentIndex] = element
            index = parentIndex
        }
    }
}

const minBinaryHeap = new MinBinaryHeap()