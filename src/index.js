
// You should implement your task here.

module.exports = function towelSort(matrix) {

  let result = [];

  if (arguments.length == 0 || matrix.length == 0) {
    return result;
  }
  result.push(...matrix[0]);
  for (let i = 0; i < matrix.length; i = i + 2) {
    if (matrix[i + 1]) {
      result.push(matrix[i + 1].reverse());
    }
    if (matrix[i + 2]) {
      result.push(...matrix[i + 2]);
    }
  }
  return [].concat(...result)
}