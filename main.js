// const util = require('util')

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

  console.log('Path:', path.reverse())
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

// Array of move functions
const moveFunctions = [
  moveUpOneLeftTwoOrLeftTwoUpOne,
  moveUpOneRightTwoOrRightTwoUpOne,
  moveUpTwoLeftOneOrLeftOneUpTwo,
  moveUpTwoRightOneOrRightOneUpTwo,
  moveRightOneDownTwoOrDownTwoRightOne,
  moveRightTwoDownOneOrDownOneRightTwo,
  moveDownOneLeftTwoOrLeftTwoDownOne,
  moveDownTwoLeftOneOrLeftOneDownTwo,
]

// Generate neighbors bases on the current node
function generateNeighbors(currentNode) {
  const first = currentNode[0]
  const second = currentNode[1]

  const neighbors = []

  moveFunctions.forEach((func) => {
    const neighbor = func(first, second)

    if (neighbor) {
      neighbors.push(neighbor)
    }
  })

  return neighbors
}

// Move knight one step up, two steps left or two steps left, one step up
function moveUpOneLeftTwoOrLeftTwoUpOne(first, second) {
  const nextFirst = first + 1
  const nextSecond = second - 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    return neighbor
  }
}

// Move knight one step up, two steps right or two steps right, one step up
function moveUpOneRightTwoOrRightTwoUpOne(first, second) {
  const nextFirst = first + 1
  const nextSecond = second + 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    return neighbor
  }
}

// Move knight two steps up, one step left or one step left, two steps up
function moveUpTwoLeftOneOrLeftOneUpTwo(first, second) {
  const nextFirst = first + 2
  const nextSecond = second - 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    return neighbor
  }
}

// Move knight two steps up, one step right or one step right, two steps up
function moveUpTwoRightOneOrRightOneUpTwo(first, second) {
  const nextFirst = first + 2
  const nextSecond = second + 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    return neighbor
  }
}

// Move knight one step right, two steps down or two steps down, one step right
function moveRightOneDownTwoOrDownTwoRightOne(first, second) {
  const nextFirst = first - 2
  const nextSecond = second + 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    return neighbor
  }
}

// Move knight two steps right, one step down or one step down, two steps right
function moveRightTwoDownOneOrDownOneRightTwo(first, second) {
  const nextFirst = first - 1
  const nextSecond = second + 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    return neighbor
  }
}

// Move knight one step down, two steps left or two steps left, one step down
function moveDownOneLeftTwoOrLeftTwoDownOne(first, second) {
  const nextFirst = first - 1
  const nextSecond = second - 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    return neighbor
  }
}

// Move knight two steps down, one step left or one step left, two steps down
function moveDownTwoLeftOneOrLeftOneDownTwo(first, second) {
  const nextFirst = first - 2
  const nextSecond = second - 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    return neighbor
  }
}

// generateAdjacencyList([3, 3])
knightMoves([0, 0], [4, 4])
