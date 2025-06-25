function knightMoves(startNode) {
  const adjacencyList = generateAdjacencyList(startNode)
  console.log(adjacencyList)
}

// Generate adjacency list based on the start node
function generateAdjacencyList(startNode) {
  // console.log('hello')
  const adjacencyList = {}

  let currentNode = startNode
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

  moveFunctions.forEach(func => {
    const neighbor = func(first, second)
    console.log(neighbor)
    
    if (neighbor) {
      neighbors.push(neighbor)
    }
  })

  console.log('Neighbors:', neighbors)
  return neighbors
}

// Move knight one step up, two steps left or two steps left, one step up
function moveUpOneLeftTwoOrLeftTwoUpOne(first, second) {
  const nextFirst = first + 1
  const nextSecond = second - 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    // console.log('Neighbor:', neighbor)
    return neighbor
  }
}

// Move knight one step up, two steps right or two steps right, one step up
function moveUpOneRightTwoOrRightTwoUpOne(first, second) {
  const nextFirst = first + 1
  const nextSecond = second + 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    // console.log('Neighbor:', neighbor)
    return neighbor
  }
}

// Move knight two steps up, one step left or one step left, two steps up
function moveUpTwoLeftOneOrLeftOneUpTwo(first, second) {
  const nextFirst = first + 2
  const nextSecond = second - 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    // console.log('Neighbor:', neighbor)
    return neighbor
  }
}

// Move knight two steps up, one step right or one step right, two steps up
function moveUpTwoRightOneOrRightOneUpTwo(first, second) {
  const nextFirst = first + 2
  const nextSecond = second + 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    // console.log('Neighbor:', neighbor)
    return neighbor
  }
}

// Move knight one step right, two steps down or two steps down, one step right
function moveRightOneDownTwoOrDownTwoRightOne(first, second) {
  const nextFirst = first - 2
  const nextSecond = second + 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    // console.log('Neighbor:', neighbor)
    return neighbor
  }
}

// Move knight two steps right, one step down or one step down, two steps right
function moveRightTwoDownOneOrDownOneRightTwo(first, second) {
  const nextFirst = first - 1
  const nextSecond = second + 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    // console.log('Neighbor:', neighbor)
    return neighbor
  }
}

// Move knight one step down, two steps left or two steps left, one step down
function moveDownOneLeftTwoOrLeftTwoDownOne(first, second) {
  const nextFirst = first - 1
  const nextSecond = second - 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    // console.log('Neighbor:', neighbor)
    return neighbor
  }
}

// Move knight two steps down, one step left or one step left, two steps down
function moveDownTwoLeftOneOrLeftOneDownTwo(first, second) {
  const nextFirst = first - 2
  const nextSecond = second - 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    // console.log('Neighbor:', neighbor)
    return neighbor
  }
}


generateNeighbors([7, 7])
