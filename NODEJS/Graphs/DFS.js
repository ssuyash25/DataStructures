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


    DFS(vertex){
        let list = []
        let visited = {}
        return this.DFSHelper(vertex,visited,list)
    }

    DFSHelper(vertex, visited, list){
        if(!vertex)
        return null
        visited[vertex] = true
        list.push(vertex)
        this.adjacencyList[vertex].forEach(neighbour => {
            if(!visited[neighbour]){
               return this.DFSHelper(neighbour, visited, list)
            }
        })
        return list
    }

    DFSIterative(vertex){
        let list = []
        let visited = [vertex]
        while(visited.length > 0){
            const a = visited.pop()
            if(!list.includes(a)){
            list.push(a)
            visited.push(... this.adjacencyList[a])
            }
        }
        return list
    }

    DFSIterative2(vertex){
        let list = []
        let visited = {}
        let stack = [vertex]
        visited[vertex] = true
        let currentVertex
        while(stack.length){
            currentVertex = stack.pop()
            list.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour)
                }
            })
        }
        return list
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

console.log(graph.DFS('A'))
console.log(graph.DFSIterative('A'))
console.log(graph.DFSIterative2('A'))