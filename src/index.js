
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === [] || arguments.length === 0) {
    return []
  } else {
    let newArr = []
    matrix.forEach( (el, index) => {
        if (index % 2 === 1 || index === 1) {
            el.sort( (a, b) => b-a)
        }
        newArr = [...newArr, ...el]
    })
    return newArr}
}
