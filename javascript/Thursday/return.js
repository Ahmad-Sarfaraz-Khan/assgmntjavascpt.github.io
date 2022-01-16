function s(matrix) {
    var n={sum: 0},
      m = matrix.length;
    for (var i=0; i<m; i++) {
      n.sum += matrix[i][i];
    }
    return n
}
const matrix = [
    [8, 6, 7, 1],
    [3, 1, 4, 9],
    [4, 8, 5, 8],
    [7, 1, 6, 9],
  ];
document.write(s(matrix));
