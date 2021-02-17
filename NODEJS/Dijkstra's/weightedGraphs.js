class PreorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, preority){
        this.values.push({val, preority})
        this.sort()
    }

    dequeue(){
        return this.values.shift()
    }

    sort(){ // O(n logn) -- Better go with preority Q Implementation in Binary heap
        this.values.sort((a,b) => a.preority - b.preority)
    }
}

class WeightedGraphs{
    constructor(){
        this.adjacencyList = []
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex] = [] 
    }

    addEdges(vertex1, vertex2, weight ){
        this.adjacencyList[vertex1].push({node: vertex2,weight})
        this.adjacencyList[vertex2].push({node: vertex1,weight})
    }

    Dijkstra(start, finish){
        const nodes = new PreorityQueue()
        const previous = {}
        const distances = {}
        let path = [] // return
        let smallest

        // set up
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0)
            }else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        //As long as we have something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val
            if(smallest === finish){ //base case
               while(previous[smallest]){
                   path.push(smallest)
                   smallest = previous[smallest]
               }
               break
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    // Find neighbouring node
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    // Calculate new distance to neighbouring node
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbour = nextNode.node;
                    if(candidate < distances[nextNeighbour]){
                        // Updating new smallest distance to neighbour
                        distances[nextNeighbour] = candidate;
                        // Updating previous - How we got to Neighbour
                        previous[nextNeighbour] = smallest
                        // enqueue in preority queue with new preority
                        nodes.enqueue(nextNeighbour, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

let graph = new WeightedGraphs();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdges('A', 'B', 4)
graph.addEdges('A', 'C', 2)
graph.addEdges('B', 'E', 3)
graph.addEdges('C', 'D', 2)
graph.addEdges('C', 'F', 4)
graph.addEdges('D', 'E', 3)
graph.addEdges('D', 'F', 1)
graph.addEdges('E', 'F', 1)

console.log(graph)

console.log(graph.Dijkstra('A', 'E'))