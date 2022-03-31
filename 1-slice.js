function slice(array, start, end) {//4
  let slicedArray = [];//1
  for (let i = start; i < end; i++) {//6
    slicedArray.push(array[i]);//5
  }
  return slicedArray;//1
}

module.exports = { slice };//1


//la complexiter temporelle de l'algorithme 
//4+1+(6+5)*end+1+1
//o=1+1(1+1)*n+1+1
//o=1(1)*n
//o=n
