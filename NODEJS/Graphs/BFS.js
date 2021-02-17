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

    BFS(start){
        let queue = [start]
        let result = []
        let visited = {}
        let currentVertex
        visited[start] = true
        while(queue.length){
           currentVertex = queue.shift()
           result.push(currentVertex)
           this.adjacencyList[currentVertex].forEach(neighbour => {
               if(!visited[neighbour]){
                visited[neighbour] = true
                queue.push(neighbour)
               }
           })
        }
        return result
    }
}

let graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdges('A', 'B')
graph.addEdges('A', 'C')
graph.addEdges('B', 'D')
graph.addEdges('C', 'E')
graph.addEdges('D', 'E')
graph.addEdges('D', 'F')
graph.addEdges('E', 'F')

console.log(graph.BFS('A'))

