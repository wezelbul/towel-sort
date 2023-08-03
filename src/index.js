
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix !== undefined) {
        for (let i = 0; i < matrix.length; i++) {
            switch (i % 2) {
                case 0:
                    for (let j = 0; j < matrix[i].length; j++) {
                        result.push(matrix[i][j]);
                    }
                    break;
                case 1:
                    for (let j = matrix[i].length - 1; j >= 0; j--) {
                        result.push(matrix[i][j]);
                    }
                    break;
            }
        }
    }
    return result;
}
