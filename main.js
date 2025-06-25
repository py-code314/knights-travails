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
  while ((first >= 0 && first <= 7) && (second >= 0 && second <= 7)) {
    moveTopOneLeftTwo(first,second)
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



// Move knight one step up, two steps left
function moveUpOneLeftTwo(first, second) {
  const nextFirst = first + 1
  const nextSecond = second - 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight one step up, two steps right
function moveUpOneRightTwo(first, second) {
  const nextFirst = first + 1
  const nextSecond = second + 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight two steps up, one step left
function moveUpTwoLeftOne(first, second) {
  const nextFirst = first + 2
  const nextSecond = second - 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight two steps up, one step right
function moveUpTwoRightOne(first, second) {
  const nextFirst = first + 2
  const nextSecond = second + 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight one step right, two steps up
function moveRightOneUpTwo(first, second) {
  const nextFirst = first + 2
  const nextSecond = second + 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight one step right, two steps down
function moveRightOneDownTwo(first, second) {
  const nextFirst = first - 2
  const nextSecond = second + 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight two steps right, one step up
function moveRightTwoUpOne(first, second) {
  const nextFirst = first + 1
  const nextSecond = second + 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight two steps right, one step down
function moveRightTwoDownOne(first, second) {
  const nextFirst = first - 1
  const nextSecond = second + 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}



// Move knight one step down, two steps left
function moveDownOneLeftTwo(first, second) {
  const nextFirst = first - 1
  const nextSecond = second - 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight one step down, two steps right
function moveDownOneRightTwo(first, second) {
  const nextFirst = first - 1
  const nextSecond = second + 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}



// Move knight two steps down, one step left
function moveDownTwoLeftOne(first, second) {
  const nextFirst = first - 2
  const nextSecond = second - 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight two steps down, one step right
function moveDownTwoRightOne(first, second) {
  const nextFirst = first - 2
  const nextSecond = second + 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight one step left, two steps up
function moveLeftOneUpTwo(first, second) {
  const nextFirst = first + 2
  const nextSecond = second - 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight one step left, two steps down
function moveLeftOneDownTwo(first, second) {
  const nextFirst = first - 2
  const nextSecond = second - 1

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight two steps left, one step up
function moveLeftTwoUpOne(first, second) {
  const nextFirst = first + 1
  const nextSecond = second - 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}

// Move knight two steps left, one step down
function moveLeftTwoDownOne(first, second) {
  const nextFirst = first - 1
  const nextSecond = second - 2

  if (nextFirst >= 0 && nextFirst <= 7 && nextSecond >= 0 && nextSecond <= 7) {
    const neighbor = [nextFirst, nextSecond]
    console.log('Neighbor:', neighbor)
  }
}











moveUpOneLeftTwo(7, 7)
moveUpOneRightTwo(7, 7)
moveUpTwoLeftOne(7, 7)
moveUpTwoRightOne(7, 7)

moveRightOneUpTwo(7, 7)
moveRightOneDownTwo(7, 7)
moveRightTwoUpOne(7, 7)
moveRightTwoDownOne(7, 7)

moveDownOneLeftTwo(7, 7)
moveDownOneRightTwo(7, 7)
moveDownTwoLeftOne(7, 7)
moveDownTwoRightOne(7, 7)

moveLeftOneUpTwo(7, 7)
moveLeftOneDownTwo(7, 7)
moveLeftTwoUpOne(7, 7)
moveLeftTwoDownOne(7, 7)

