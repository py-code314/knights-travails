
function knightMoves(startNode, endNode) {
  // Get adjacency list
  const nextMoves = generateAdjacencyList(startNode)
  // const nextMovesLength = Object.keys(nextMoves).length

  const nodesInfo = {}

  // Populate nodes info with initial null values
  for (let nextMove in nextMoves) {
    nodesInfo[`${nextMove}`] = { distance: null, previous: null }
  }

  // Set start node's distance to 0
  nodesInfo[`[${startNode}]`].distance = 0

  const queue = [startNode]
  const path = [endNode]

  // Do BFS and update nodesInfo values
  updateNodesInfo(queue, nextMoves, nodesInfo)

  // Loop through nodesInfo
  for (let node in nodesInfo) {
    const nodeArray = JSON.parse(node)
    if (arraysEqual(nodeArray, endNode)) {
      let current = nodeArray
      current = JSON.stringify(current)

      // Push all intermediate nodes to the path
      while (nodesInfo[current].previous) {
        path.push(nodesInfo[current].previous)
        current = nodesInfo[current].previous
        current = JSON.stringify(current)
      }
    }
  }

  return path.reverse()
}

function updateNodesInfo(queue, nextMoves, nodesInfo) {
  while (queue.length) {
    const currentNode = queue.shift()
    const size = nextMoves[`[${currentNode}]`].length

    for (let i = 0; i < size; i++) {
      const nextNode = nextMoves[`[${currentNode}]`][i]

      if (nodesInfo[`[${nextNode}]`].distance === null) {
        nodesInfo[`[${nextNode}]`].distance =
          nodesInfo[`[${currentNode}]`].distance + 1
        nodesInfo[`[${nextNode}]`].previous = currentNode
        queue.push(nextNode)
      }
    }
  }
}

// Check if two arrays are equal
function arraysEqual(array1, array2) {
  return (
    Array.isArray(array1) &&
    Array.isArray(array2) &&
    array1.length === array2.length &&
    array1.every((value, index) => value === array2[index])
  )
}

// Generate adjacency list based on the start node
function generateAdjacencyList(startNode) {
  const adjacencyList = {}

  let queue = [startNode]

  const visitedNodes = [startNode]

  while (queue.length) {
    let currentNode = queue.shift()

    const neighbors = generateNeighbors(currentNode)

    adjacencyList[`[${currentNode}]`] = neighbors

    neighbors.forEach((neighbor) => {
      if (!visitedNodes.some((node) => arraysEqual(node, neighbor))) {
        queue.push(neighbor)

        visitedNodes.push(neighbor)
      }
    })
  }
  return adjacencyList
}


// Generate neighbors bases on the current node
function generateNeighbors(currentNode) {
  const first = currentNode[0]
  const second = currentNode[1]

  const neighbors = []

  const addValues = [
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
    [-2, 1],
    [-1, 2],
    [-1, -2],
    [-2, -1],
  ]

  addValues.forEach((values) => {
    const nextFirst = first + values[0]
    const nextSecond = second + values[1]

    if (
      nextFirst >= 0 &&
      nextFirst <= 7 &&
      nextSecond >= 0 &&
      nextSecond <= 7
    ) {
      const neighbor = [nextFirst, nextSecond]
      neighbors.push(neighbor)
    }
  })

  return neighbors
}


// knightMoves([0, 0], [4, 4])
console.log(knightMoves([0, 0], [3, 3]))
console.log(knightMoves([3, 3], [0, 0]))
console.log(knightMoves([0, 0], [7, 7]))
// knightMoves([0, 0], [4, 4])
