
exports.min = function min (array) {
  if (array === undefined || array.length == []) {
    return 0
  } else {
    let min = Math.min(...array)
    return min
  }
  
}

exports.max = function max (array) {
  if (array === undefined || array.length == []) {
    return 0
  } else {
    let max = Math.max(...array)
    return max
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length == []) {
    return 0
  } else {
    let sum = 0
    let count = array.length
    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    let avg = sum/count
    return avg
  }
  
}
