
// You should implement your task here.
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

module.exports = function towelSort(matrix) {
    if (!matrix) return []
    if (matrix.length == 0) return []
    let newArr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if ((i + 1) % 2 == 0) {
                newArr.push(matrix[i][matrix[i].length - j - 1])
            } else
                newArr.push(matrix[i][j])
        }
    }
    return newArr;
}

