function merge(array1, array2) {//3
  let mergedArray = [];//1
  let i = 0;//1
  let j = 0;//1
  while (i < array1.length && j < array2.length) {//9
    if (array1[i] < array2[j]) {//7
      mergedArray.push(array1[i]);//5
      i++;//1
    } else {
      mergedArray.push(array2[j]);//5
      j++;//1
    }
  }
  while (i < array1.length) {//4
    mergedArray.push(array1[i]);//5
    i++;//1
  }
  while (j < array2.length) {//4
    mergedArray.push(array2[j]);//5
    j++;//1
  }
  return mergedArray;//1
}

module.exports = { merge };//1

//la complexiter temporelle de l'algorithme est 
//3+1+1+1+((9+7+5+1+5+1)array1.length*array2.length)+((4+5+1)*array1.length)+((4+5+1)*array2.length)+1+1
//o=1+1+1+1+((1+1+1+1+1+1)n*n)+((4+5+1)*n)+((1+1+1)*n)+1+1
//o=1+(1)*n*n+(1)*n+(1)*n+1
//o=n^2+n+n
//o=n^2
