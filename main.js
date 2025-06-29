/* Finds the shortest path between two nodes in a knights travails graph */
function knightMoves(startNode, endNode) {
  // Generate adjacency list and initialize nodesInfo
  const adjacencyList = generateAdjacencyList(startNode)
  const nodesInfo = {}

  // Populate nodesInfo with initial null values
  Object.keys(adjacencyList).forEach((node) => {
    nodesInfo[node] = { distance: null, previousNode: null }
  })

  // Set startNode distance to 0
  nodesInfo[JSON.stringify(startNode)].distance = 0

  // Initialize queue and path
  const queue = [startNode]
  const path = [endNode]

  // Update nodesInfo
  updateNodesInfo(queue, adjacencyList, nodesInfo)

  // Build path
  Object.keys(nodesInfo).forEach((node) => {
    // Convert node string to array
    const nodeArray = JSON.parse(node)
    // Check if node is the end node
    if (arraysAreEqual(nodeArray, endNode)) {
      let currentNode = nodeArray

      // Add previous nodes to path
      // Use JSON.stringify to convert node array to string
      while (nodesInfo[JSON.stringify(currentNode)].previousNode) {
        path.push(nodesInfo[JSON.stringify(currentNode)].previousNode)
        currentNode = nodesInfo[JSON.stringify(currentNode)].previousNode
      }
    }
  })

  // Reverse path
  return path.reverse()
}

/* Updates nodeData with shortest distance and previous node information */
function updateNodesInfo(queue, adjacencyList, nodeData) {
  while (queue.length > 0) {
    const currentNode = queue.shift()
    // Get neighbors based on current node
    const neighbors = adjacencyList[`[${currentNode}]`]

    // Update nodeData
    neighbors.forEach((neighbor) => {
      if (nodeData[`[${neighbor}]`].distance === null) {
        nodeData[`[${neighbor}]`].distance =
          nodeData[`[${currentNode}]`].distance + 1
        nodeData[`[${neighbor}]`].previousNode = currentNode
        queue.push(neighbor)
      }
    })
  }
}

/* Returns true if two arrays are equal and false otherwise */
function arraysAreEqual(array1, array2) {
  // Check if array1 and array2 are arrays
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false
  }

  // Check if array1 and array2 have the same length
  if (array1.length !== array2.length) {
    return false
  }

  // Check if each value in array1 is equal to the corresponding value in array2
  return array1.every((value, index) => value === array2[index])
}

/* Generates an adjacency list of a graph based on a start node */
function generateAdjacencyList(startNode) {
  // Initialize variables
  const adjacencyList = {}
  const queue = [startNode]
  const visitedNodes = [startNode]

  while (queue.length) {
    let currentNode = queue.shift()
    // Generate neighbors
    const neighbors = generateNeighbors(currentNode)

    // Add neighbors to adjacency list
    adjacencyList[`[${currentNode}]`] = neighbors

    neighbors.forEach((neighbor) => {
      // Check if neighbor has already been visited
      if (!visitedNodes.some((node) => arraysAreEqual(node, neighbor))) {
        queue.push(neighbor)
        visitedNodes.push(neighbor)
      }
    })
  }
  return adjacencyList
}

/* Generates all valid neighbors of a given node in a chess board */
function generateNeighbors(currentNode) {
  // Initialize variables
  const [x, y] = currentNode
  const neighbors = []
  const moves = [
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
    [-2, 1],
    [-1, 2],
    [-1, -2],
    [-2, -1],
  ]

  // Generate neighbors
  moves.forEach(([item1, item2]) => {
    const newX = x + item1
    const newY = y + item2

    // Check if next move is valid
    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
      neighbors.push([newX, newY])
    }
  })

  return neighbors
}

// console.log(knightMoves([0, 0], [3, 3]))
// console.log(knightMoves([3, 3], [0, 0]))
// console.log(knightMoves([0, 0], [7, 7]))
