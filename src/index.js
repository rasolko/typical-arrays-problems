
exports.min = function min (array) {
  if(arguments.length === 0 || array == 0) {
    return 0
  }
  let minNumber = array[0];
  array.map( item => {
    if(item < minNumber) minNumber = item
  })
  return minNumber
}

exports.max = function max (array) {
  if(arguments.length === 0 || array == 0) {
    return 0
  }
  else{
    let maxNumber = array[0];
  array.map( item => {
    if(item > maxNumber) maxNumber = item
  })
  return maxNumber
  }
  
}

exports.avg = function avg (array) {
  if(arguments.length === 0 || array == 0) {
    return 0
  }
  let sum = 0;
  array.map( item => {
    sum += item;
  })
  return sum / array.length;
}
