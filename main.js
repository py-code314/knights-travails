function knightMoves(start, end) {
  const adjacencyList = generateAdjacencyList(start);
  const nodesInfo = {};

  // Populate nodes info with initial null values
  Object.keys(adjacencyList).forEach((node) => {
    nodesInfo[node] = { distance: null, previousNode: null };
  });

  // Set start node's distance to 0
  nodesInfo[JSON.stringify(start)].distance = 0;

  const queue = [start];
  const path = [end];

  // Do BFS and update nodesInfo values
  updateNodesInfo(queue, adjacencyList, nodesInfo);

  // Loop through nodesInfo
  Object.keys(nodesInfo).forEach((node) => {
    const nodeArray = JSON.parse(node);
    if (arraysAreEqual(nodeArray, end)) {
      let current = nodeArray;

      // Push all intermediate nodes to the path
      while (nodesInfo[JSON.stringify(current)].previousNode) {
        path.push(nodesInfo[JSON.stringify(current)].previousNode);
        current = nodesInfo[JSON.stringify(current)].previousNode;
      }
    }
  });

  return path.reverse();
}



function updateNodesInfo(queue, adjacencyList, nodeData) {
  while (queue.length > 0) {
    const currentNode = queue.shift();
    const neighbors = adjacencyList[`[${currentNode}]`];

    neighbors.forEach((neighbor) => {
      if (nodeData[`[${neighbor}]`].distance === null) {
        nodeData[`[${neighbor}]`].distance = nodeData[`[${currentNode}]`].distance + 1;
        nodeData[`[${neighbor}]`].previousNode = currentNode;
        queue.push(neighbor);
      }
    });
  }
}

// Check if two arrays are equal
function arraysAreEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false
  }

  if (array1.length !== array2.length) {
    return false
  }

  return array1.every((value, index) => value === array2[index])
}

// Generate adjacency list based on the start node
function generateAdjacencyList(startNode) {
  const adjacencyList = {}
  const queue = [startNode]
  const visitedNodes = [startNode]

  while (queue.length) {
    let currentNode = queue.shift()
    const neighbors = generateNeighbors(currentNode)

    adjacencyList[`[${currentNode}]`] = neighbors

    neighbors.forEach((neighbor) => {
      if (!visitedNodes.some((node) => arraysAreEqual(node, neighbor))) {
        queue.push(neighbor)
        visitedNodes.push(neighbor)
      }
    })
  }
  return adjacencyList
}

function generateNeighbors(currentNode) {
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

  moves.forEach(([item1, item2]) => {
    const newX = x + item1
    const newY = y + item2

    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
      neighbors.push([newX, newY])
    }
  })

  return neighbors
}

console.log(knightMoves([0, 0], [3, 3]))
console.log(knightMoves([3, 3], [0, 0]))
console.log(knightMoves([0, 0], [7, 7]))
