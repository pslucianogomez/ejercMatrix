//string arr/arr
const matrix = [
  ['B', 'B', 'D', 'A', 'D', 'E', 'F'],
  ['B', 'X', 'C', 'D', 'D', 'J', 'K'],
  ['H', 'Y', 'I', '3', 'D', 'D', '3'],
  ['R', '7', 'O', 'Ñ', 'G', 'D', '2'],
  ['W', 'N', 'S', 'P', 'E', '0', 'D'],
  ['A', '9', 'C', 'D', 'D', 'E', 'F'],
  ['B', 'X', 'D', 'D', 'D', 'J', 'K']
];

const rows = matrix.length;
const columns = matrix[0].length;

function find() {
  let result = '';

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const current = getSeq(row, col);
      if (current.length > result.length) {
        result = current;
      }
    }
  }

  return result;
}

function getSeq(row, column) {
  const checked = new Set();
  const queue = [[row, column]];
  
  let seq = '';

  while (queue.length > 0) {
    const [currentRow, currentCol] = queue.shift();
    if (checked.has(`${currentRow},${currentCol}`)) {
      continue;
    }
    checked.add(`${currentRow},${currentCol}`);
    seq += matrix[currentRow][currentCol];

    if (currentRow > 0 && matrix[currentRow - 1][currentCol] === matrix[currentRow][currentCol]) {
      queue.push([currentRow - 1, currentCol]);
    }
    if (currentRow < rows - 1 && matrix[currentRow + 1][currentCol] === matrix[currentRow][currentCol]) {
      queue.push([currentRow + 1, currentCol]);
    }
    if (currentCol > 0 && matrix[currentRow][currentCol - 1] === matrix[currentRow][currentCol]) {
      queue.push([currentRow, currentCol - 1]);
    }
    if (currentCol < columns - 1 && matrix[currentRow][currentCol + 1] === matrix[currentRow][currentCol]) {
      queue.push([currentRow, currentCol + 1]);
    }
  }

  return seq;
}

console.log(find(matrix));
