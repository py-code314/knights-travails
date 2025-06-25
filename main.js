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

// Generate neighbors bases on the current node
function generateNeighbors(currentNode) {
  // const [first, second] = currentNode
  // console.log(first, second)
  let first = currentNode[0]
  let second = currentNode[1]

  const neighbors = []
  while (first >= 0 && first <= 7 && second >= 0 && second <= 7) {
    moveTopOneLeftTwo(first, second)
    // const firstNewFirst = first + 1
    // first = firstNewFirst
    // const firstNewSecond = second + 2
    // second = firstNewSecond

    // if ((first >= 0 && first <= 7) && (second >= 0 && second <= 7)) {
    //   const firstNeighbor = [firstNewFirst, firstNewSecond]
    //   console.log('Neighbor:', firstNeighbor)
    //   neighbors.push(firstNeighbor)
    // }

    // const secondNewFirst = first + 2
    // first = secondNewFirst
    // const secondNewSecond = second + 1
    // second = secondNewSecond
    // const secondNeighbor = [secondNewFirst, secondNewSecond]
    // console.log('Neighbor:', secondNeighbor)
    // neighbors.push(secondNeighbor)
  }
  console.log('Neighbors:', neighbors)
}

// Move knight one step up, two steps left or two steps left, one step up
function moveUpOneLeftTwoOrLeftTwoUpOne(first, second) {
  const nextFirst = first + 1
  const nextSecond = second - 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight one step up, two steps right or two steps right, one step up
function moveUpOneRightTwoOrRightTwoUpOne(first, second) {
  const nextFirst = first + 1
  const nextSecond = second + 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight two steps up, one step left or one step left, two steps up
function moveUpTwoLeftOneOrLeftOneUpTwo(first, second) {
  const nextFirst = first + 2
  const nextSecond = second - 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight two steps up, one step right or one step right, two steps up
function moveUpTwoRightOneOrRightOneUpTwo(first, second) {
  const nextFirst = first + 2
  const nextSecond = second + 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight one step right, two steps down or two steps down, one step right
function moveRightOneDownTwoOrDownTwoRightOne(first, second) {
  const nextFirst = first - 2
  const nextSecond = second + 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight two steps right, one step down or one step down, two steps right
function moveRightTwoDownOneOrDownOneRightTwo(first, second) {
  const nextFirst = first - 1
  const nextSecond = second + 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight one step down, two steps left or two steps left, one step down
function moveDownOneLeftTwoOrLeftTwoDownOne(first, second) {
  const nextFirst = first - 1
  const nextSecond = second - 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight two steps down, one step left or one step left, two steps down
function moveDownTwoLeftOneOrLeftOneDownTwo(first, second) {
  const nextFirst = first - 2
  const nextSecond = second - 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

moveUpOneLeftTwoOrLeftTwoUpOne(4, 4)
moveUpOneRightTwoOrRightTwoUpOne(4, 4)
moveUpTwoLeftOneOrLeftOneUpTwo(4, 4)
moveUpTwoRightOneOrRightOneUpTwo(4, 4)
moveRightOneDownTwoOrDownTwoRightOne(4, 4)
moveRightTwoDownOneOrDownOneRightTwo(4, 4)
moveDownOneLeftTwoOrLeftTwoDownOne(4, 4)
moveDownTwoLeftOneOrLeftOneDownTwo(4, 4)
