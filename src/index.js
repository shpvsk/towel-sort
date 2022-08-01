
// You should implement your task here.

module.exports = function towelSort(matrix) {
    const result = []

    if (!matrix) {
        return result
    } else {

        for (let i = 0; i < matrix.length; i++) { // проход по первому массиву

            for (let j = 0; j < matrix[i].length; j++) { // проход по  подмассивам

                let index = i % 2 === 0 // если индекс вложенного массива четный, то
                    ? j // перебираем элементы из подмассива, который с четным идексом, по порядку начиная с нулевого индекса
                    : (matrix[i].length - 1 - j) // если индекс нечетный, то перебираем элементы из нечетного подмассива начиная с последнего элемента т.е.(matrix[i].length - 1) и до первого (-j), вычитая увеличивающийся индекс j от индекса последнего элемента
                result.push(matrix[i][index])
            }
        }
        return result
    }

}
