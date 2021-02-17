class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex] = []
    }

    addEdges(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v != vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v != vertex1);
    }

    removeVertex(vertex){
        Object.keys(this.adjacencyList).forEach(v => {
            this.removeEdge(v, vertex)
        })
        delete this.adjacencyList[vertex]
    }
}

let graph = new Graph();
graph.addVertex('Mumbai')
graph.addVertex('Delhi')
graph.addVertex('Hyderabad')
graph.addVertex('Bangaluru')
graph.addEdges('Mumbai', 'Delhi')
graph.addEdges('Delhi', 'Hyderabad')
graph.addEdges('Bangaluru', 'Hyderabad')
graph.addEdges('Hyderabad', 'Mumbai')

console.log(graph)
// graph.removeEdge('Hyderabad', 'Delhi')
graph.removeVertex('Delhi')
console.log(graph)
